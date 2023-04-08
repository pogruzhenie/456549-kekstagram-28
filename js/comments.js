const NO_COMMENTS_MESSAGE = 'Эту фотографию пока никто не комментировал';
const COMMENTS_LOAD_COUNT = 5;

//addEventListener("DOMContentLoaded", (event) => {});
//onDOMContentLoaded = (event) => {};

const getComments = (commentedBlock, commentsCounter, commentsArray) => {

  const photoDefaultComment = commentedBlock.querySelector('.social__comment');
  const commentsBlock = commentedBlock.querySelector('.social__comments');
  const moreCommentsButton = commentedBlock.querySelector('.comments-loader');
  const commentsCountBlock = commentedBlock.querySelector('.social__comment-count');

  const refreshCommentsCounter = () => {
    const loadedComments = commentedBlock.querySelectorAll('.social__comment');
    commentsCounter.querySelector('.comments-count').textContent = commentsArray.length;
    commentsCounter.querySelector('.comments-loaded-count').textContent = loadedComments.length;
    commentsCountBlock.textContent = commentsCounter.textContent;
  };

  const displayCommentsCounterMessage = () => {
    if (commentsArray.length === 0) {
      commentsCountBlock.textContent = NO_COMMENTS_MESSAGE;
    }
    if (commentsArray.length < COMMENTS_LOAD_COUNT) {
      let commentsCountMessage = '';
      switch (true) {
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
      commentsCountBlock.textContent = commentsCountMessage;
    } else {
      refreshCommentsCounter();
    }
  };

  const loadComments = (offset = 0, commentsLoadingCount = COMMENTS_LOAD_COUNT) => {
    const commentsListFragment = document.createDocumentFragment();

    if (commentsArray.length <= COMMENTS_LOAD_COUNT) {
      commentsLoadingCount = commentsArray.length;
    }

    for (let i = offset; i < commentsLoadingCount; i++){
      const comment = commentsArray[i];
      const photoComment = photoDefaultComment.cloneNode(true);
      const commentAutor = photoComment.querySelector('.social__picture');
      commentAutor.alt = comment.name;
      commentAutor.src = comment.avatar;
      photoComment.querySelector('.social__text').textContent = comment.message;
      commentsListFragment.append(photoComment);
    }
    commentsBlock.append(commentsListFragment);
  };

  const onCommentsLoad = (evt) => {
    if (moreCommentsButton.disabled === false) {
      evt.preventDefault();
      const loadedCommentsCount = commentedBlock.querySelectorAll('.social__comment').length;
      moreCommentsButton.disabled = true;
      let currentEnd = commentsArray.length;
      if (loadedCommentsCount + COMMENTS_LOAD_COUNT < commentsArray.length){
        currentEnd = loadedCommentsCount + COMMENTS_LOAD_COUNT;
        loadComments(loadedCommentsCount, currentEnd);
        refreshCommentsCounter();
        moreCommentsButton.disabled = false;
      } else {
        moreCommentsButton.classList.add('hidden');
        loadComments(loadedCommentsCount, currentEnd);
        refreshCommentsCounter();
        moreCommentsButton.removeEventListener('click', onCommentsLoad);
        moreCommentsButton.disabled = false;
      }
    }
  };

  commentsBlock.textContent = '';

  if (commentsArray.length > 0) {
    loadComments();
    if (commentsArray.length > COMMENTS_LOAD_COUNT) {
      refreshCommentsCounter();
      moreCommentsButton.classList.remove('hidden');
      moreCommentsButton.addEventListener('click', onCommentsLoad);
    } else {
      displayCommentsCounterMessage();
    }
  } else {
    displayCommentsCounterMessage();
  }
};

export { getComments };
