const showDetail = (photosArray) => {
  const picturesContainer = document.querySelector('.pictures');
  const photoDetail = document.querySelector('.big-picture');
  const closeButton = photoDetail.querySelector('.big-picture__cancel');
  const photoImg = photoDetail.querySelector('.big-picture__img').querySelector('img');
  const likesCount = photoDetail.querySelector('.likes-count');
  const commentsCount = photoDetail.querySelector('.comments-count');
  const photoCaption = photoDetail.querySelector('.social__caption');
  const photoDefaultComment = photoDetail.querySelector('.social__comment');
  const photoCommentsBlock = photoDetail.querySelector('.social__comments');

  const modalClose = (evt) => {
    evt.preventDefault();
    photoDetail.classList.add('hidden');
    document.body.classList.remove('modal-open');
  };

  const onPictureClick = (evt) => {
    evt.preventDefault();

    if (evt.target.tagName === 'IMG') {

      //console.log(evt.target);
      const photoObject = photosArray[evt.target.dataset.id - 1];
      const photoComments = photoObject.comments;
      const commentsListFragment = document.createDocumentFragment();

      photoDetail.classList.remove('hidden');
      document.body.classList.add('modal-open');

      photoImg.src = evt.target.src;
      photoImg.alt = photoObject.description;
      likesCount.textContent = photoObject.likes;
      commentsCount.textContent = photoComments.length;
      photoCaption.textContent = photoObject.description;

      photoComments.forEach((comment) => {
        const photoComment = photoDefaultComment.cloneNode(true);
        const commentAutor = photoComment.querySelector('.social__picture');

        commentAutor.alt = comment.name;
        commentAutor.src = comment.avatar;
        photoComment.querySelector('.social__text').textContent = comment.message;

        commentsListFragment.append(photoComment);
      });

      photoCommentsBlock.textContent = '';
      photoCommentsBlock.append(commentsListFragment);

      closeButton.addEventListener('click', modalClose);
    }
  };

  picturesContainer.addEventListener('click', onPictureClick);
};

export { showDetail };
