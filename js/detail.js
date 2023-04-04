import { isEscapeKey } from './util.js';

const showDetail = (photosArray) => {

  document.querySelector('.social__comment-count').classList.add('hidden');
  document.querySelector('.comments-loader').classList.add('hidden');

  const picturesContainer = document.querySelector('.pictures');
  const photoDetail = document.querySelector('.big-picture');
  const closeButton = photoDetail.querySelector('.big-picture__cancel');
  const photoImg = photoDetail.querySelector('.big-picture__img').querySelector('img');
  const likesCount = photoDetail.querySelector('.likes-count');
  const commentsCount = photoDetail.querySelector('.comments-count');
  const photoCaption = photoDetail.querySelector('.social__caption');
  const photoDefaultComment = photoDetail.querySelector('.social__comment');
  const photoCommentsBlock = photoDetail.querySelector('.social__comments');

  const renderComments = (commentsArray) => {
    const commentsListFragment = document.createDocumentFragment();
    commentsArray.forEach((comment) => {
      const photoComment = photoDefaultComment.cloneNode(true);
      const commentAutor = photoComment.querySelector('.social__picture');

      commentAutor.alt = comment.name;
      commentAutor.src = comment.avatar;
      photoComment.querySelector('.social__text').textContent = comment.message;

      commentsListFragment.append(photoComment);
    });

    photoCommentsBlock.textContent = '';
    photoCommentsBlock.append(commentsListFragment);
  };

  const renderPhotoDetail = (photoObject) => {
    const photoComments = photoObject.comments;

    photoImg.src = photoObject.url;
    photoImg.alt = photoObject.description;
    likesCount.textContent = photoObject.likes;
    commentsCount.textContent = photoComments.length;
    photoCaption.textContent = photoObject.description;

    renderComments(photoComments);
  };
  const onCloseModal = () => {
    photoDetail.classList.add('hidden');
    document.body.classList.remove('modal-open');
  };

  const onDocumentKeydown = (evt) => {
    if (isEscapeKey(evt)) {
      evt.preventDefault();
      document.removeEventListener('keydown', onDocumentKeydown);
      onCloseModal();
    }
  };

  const closeModal = (evt) => {
    evt.preventDefault();
    onCloseModal();
    document.removeEventListener('keydown', onDocumentKeydown);
  };

  const onPictureClick = (evt) => {
    evt.preventDefault();

    if (evt.target.tagName === 'IMG') {

      photoDetail.classList.remove('hidden');
      document.body.classList.add('modal-open');

      closeButton.addEventListener('click', closeModal);
      document.addEventListener('keydown', onDocumentKeydown);


      const photoObject = photosArray[evt.target.dataset.id];
      renderPhotoDetail(photoObject);
    }
  };

  picturesContainer.addEventListener('click', onPictureClick);
};

export { showDetail };
