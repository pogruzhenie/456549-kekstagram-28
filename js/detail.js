import { openModal } from './popup.js';

const showDetail = (photosArray) => {

  const NO_COMMENTS_MESSAGE = 'Эту фотографию пока никто не комментировал';
  const COMMENTS_LOAD_COUNT = 5;

  const picturesContainer = document.querySelector('.pictures');
  const photoDetail = document.querySelector('.big-picture');
  const photoImg = photoDetail.querySelector('.big-picture__img').querySelector('img');
  const likesCount = photoDetail.querySelector('.likes-count');
  const photoCaption = photoDetail.querySelector('.social__caption');

  const photoDefaultComment = photoDetail.querySelector('.social__comment');
  const commentsBlock = photoDetail.querySelector('.social__comments');
  const commentsLoader = photoDetail.querySelector('.comments-loader');
  const commentsCountBlock = photoDetail.querySelector('.social__comment-count');
  const commentsCountTemplate = commentsCountBlock.cloneNode(true);

  const onCommentsLoad = (evt) => {
    if(!evt.target.disabled){
      evt.preventDefault();
      console.log(evt.target);
      const loadButton = evt.target;
      loadButton.disabled = true;

    }
  };

  const loadComments = (commentsArray, startIndex = 0, commentsLoadingCount = COMMENTS_LOAD_COUNT) => {

    const commentsListFragment = document.createDocumentFragment();
    if (commentsArray.length < COMMENTS_LOAD_COUNT) {
      commentsLoadingCount = commentsArray.length;
    }

    for (let i = startIndex; i < commentsLoadingCount; i++){
      const comment = commentsArray[i];
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

  const renderComments = (commentsArray) => {
    const commentsLenght = commentsArray.length;
    //let commentsFirstLoad = COMMENTS_LOAD_COUNT;

    if (commentsLenght <= COMMENTS_LOAD_COUNT) {

      commentsLoader.classList.add('hidden');
      //commentsFirstLoad = commentsLenght;
      let commentsCountMessage = '';

      switch (true) {
        case (commentsLenght === 1):
          commentsCountMessage = `${commentsLenght} комментарий`;
          break;
        case (commentsLenght > 1 && commentsLenght < 5):
          commentsCountMessage = `${commentsLenght} комментария`;
          break;
        case (commentsLenght > 4):
          commentsCountMessage = `${commentsLenght} комментариев`;
          break;
      }
      commentsCountBlock.textContent = commentsCountMessage;
    }

    if (commentsLenght === 0) {
      commentsCountBlock.textContent = NO_COMMENTS_MESSAGE;
    }

    if (commentsLenght >= COMMENTS_LOAD_COUNT) {
      if (commentsLenght > COMMENTS_LOAD_COUNT) {
        commentsLoader.classList.remove('hidden');
        commentsLoader.addEventListener('click', onCommentsLoad);
      }
      commentsCountTemplate.querySelector('.comments-count').textContent = commentsLenght;
      commentsCountTemplate.querySelector('.comments-loaded-count').textContent = COMMENTS_LOAD_COUNT;
      commentsCountBlock.textContent = commentsCountTemplate.textContent;
    }
    loadComments(commentsArray);
  };

  const renderPhotoDetail = (photoObject) => {
    const photoComments = photoObject.comments;

    photoImg.src = photoObject.url;
    photoImg.alt = photoObject.description;
    likesCount.textContent = photoObject.likes;
    photoCaption.textContent = photoObject.description;

    renderComments(photoComments);
  };

  const onPictureClick = (evt) => {
    evt.preventDefault();

    if (evt.target.tagName === 'IMG') {

      openModal();
      const photoObject = photosArray[evt.target.dataset.id];
      console.log(photoObject.comments);
      renderPhotoDetail(photoObject);
    }
  };


  picturesContainer.addEventListener('click', onPictureClick);

};

export { showDetail };
