import { openModal } from './popup.js';
import { getComments } from './comments.js';

const showDetail = (photosArray) => {

  const picturesContainer = document.querySelector('.pictures');
  const photoDetail = document.querySelector('.big-picture');
  const photoImg = photoDetail.querySelector('.big-picture__img').querySelector('img');
  const likesCount = photoDetail.querySelector('.likes-count');
  const photoCaption = photoDetail.querySelector('.social__caption');

  const renderPhotoDetail = (photoObject) => {
    const photoComments = photoObject.comments;

    photoImg.src = photoObject.url;
    photoImg.alt = photoObject.description;
    likesCount.textContent = photoObject.likes;
    photoCaption.textContent = photoObject.description;

    getComments(photoDetail, photoComments);
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
