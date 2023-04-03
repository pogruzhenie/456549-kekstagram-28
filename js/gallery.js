import { generatePhotos } from './data.js';
import { addPictures } from './pictures.js';

const randomPhotos = generatePhotos();

addPictures(randomPhotos);
console.log(randomPhotos);

const gallery = () => {
  const picturesContainer = document.querySelector('.pictures');
  const photoDetail = document.querySelector('.big-picture');
  const closeButton = photoDetail.querySelector('.big-picture__cancel');
  const photoImg = photoDetail.querySelector('.big-picture__img').querySelector('img');
  const likesCount = photoDetail.querySelector('.likes-count');
  const commentsCount = photoDetail.querySelector('.comments-count');
  const photoCaption = photoDetail.querySelector('.social__caption');

  console.log('gallery module connected');
  console.log(picturesContainer);

  const modalClose = (evt) => {
    evt.preventDefault();
    photoDetail.classList.add('hidden');
    document.body.classList.remove('modal-open');
  };

  const onPictureClick = (evt) => {
    evt.preventDefault();

    let photoObject = randomPhotos[evt.target.dataset.id - 1];
    let photoComments = photoObject.comments;
    const commentsListFragment = document.createDocumentFragment();

    photoDetail.classList.remove('hidden');
    document.body.classList.add('modal-open');

    photoImg.src = evt.target.src;
    photoImg.alt = photoObject.description;
    likesCount.textContent = photoObject.likes;
    commentsCount.textContent = photoComments.length;
    photoCaption.textContent = photoObject.description;

    photoComments.forEach((comment) => {
      console.log(comment);
    });

    console.log(evt);
    console.log(evt.target);
    console.log(photoImg.src);
    console.log(evt.target.src);
    console.log('photo id ' + evt.target.dataset.id);
    console.log(randomPhotos[evt.target.dataset.id - 1]);
    console.log(photoComments);

    //pictureId = evt.target.dataset.id;

    closeButton.addEventListener('click', modalClose);
  };

  picturesContainer.addEventListener('click', onPictureClick);
};

export { gallery };
