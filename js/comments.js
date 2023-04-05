const NO_COMMENTS_MESSAGE = 'Эту фотографию пока никто не комментировал';
const COMMENTS_LOAD_COUNT = 5;

const getComments = (commentedBlock, commentsArray) => {

  const photoDefaultComment = commentedBlock.querySelector('.social__comment');
  const commentsBlock = commentedBlock.querySelector('.social__comments');
  const commentsLoader = commentedBlock.querySelector('.comments-loader');
  const commentsCountBlock = commentedBlock.querySelector('.social__comment-count');
  const commentsCountTemplate = commentsCountBlock.cloneNode(true);

  console.log('comments array in comments module');
  console.log(commentsArray);

  const onCommentsLoad = (evt) => {
    if(!evt.target.disabled){
      evt.preventDefault();
      console.log(evt.target);
      const loadButton = evt.target;
      loadButton.disabled = true;
    }
  };

  const loadComments = (offset = 0, commentsLoadingCount = COMMENTS_LOAD_COUNT) => {
    console.log('function to load comments was called');
    const commentsListFragment = document.createDocumentFragment();

    console.log(commentsArray.length);

    if (commentsArray.length <= COMMENTS_LOAD_COUNT) {
      commentsLoadingCount = commentsArray.length;

    }
    console.log(commentsLoadingCount);
    console.log(offset);
    for (let i = offset; i < commentsLoadingCount; i++){
      console.log(i);
      const comment = commentsArray[i];
      console.log(comment);
      const photoComment = photoDefaultComment.cloneNode(true);
      const commentAutor = photoComment.querySelector('.social__picture');

      commentAutor.alt = comment.name;
      commentAutor.src = comment.avatar;
      photoComment.querySelector('.social__text').textContent = comment.message;

      commentsListFragment.append(photoComment);
    }

    commentsBlock.textContent = '';
    commentsBlock.append(commentsListFragment);

  };

  const renderComments = () => {
//если комметариев к фотке меньше, чем выводится в блоке по умолчанию
    if (commentsArray.length < COMMENTS_LOAD_COUNT) {

      commentsLoader.classList.add('hidden');//скрываем кнопку загрузки
      let commentsCountMessage = '';//создаём переменную для сообщения

      switch (true) {//выбираем грамотное окончание, в зависимости, от количества комментариев
        case (commentsArray.length === 1):
          commentsCountMessage = `${commentsArray.length} комментарий`;
          break;
        case (commentsArray.length > 1 && commentsArray.length < 5):
          commentsCountMessage = `${commentsArray.length} комментария`;
          break;
        case (commentsArray.length > 4):
          commentsCountMessage = `${commentsArray.length} комментариев`;
          break;
      }
      commentsCountBlock.textContent = commentsCountMessage;//выводим сообщение
    }

    if (commentsArray.length === 0) {
      commentsCountBlock.textContent = NO_COMMENTS_MESSAGE;
    }

    if (commentsArray.length >= COMMENTS_LOAD_COUNT) {
      if (commentsArray.length > COMMENTS_LOAD_COUNT) {
        commentsLoader.classList.remove('hidden');
        commentsLoader.addEventListener('click', onCommentsLoad);
      }
      commentsCountTemplate.querySelector('.comments-count').textContent = commentsArray.length;
      commentsCountTemplate.querySelector('.comments-loaded-count').textContent = COMMENTS_LOAD_COUNT;
      commentsCountBlock.textContent = commentsCountTemplate.textContent;
    }
    loadComments();
  };

  renderComments();
};

export { getComments };
