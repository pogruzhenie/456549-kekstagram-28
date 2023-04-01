const gallery = () => {
  const picturesContainer = document.querySelector('.pictures');
  const bigPicture = document.querySelector('.big-picture');
  console.log('gallery module connected');
  console.log(picturesContainer);

  const modalClose = (evt) => {
    evt.preventDefault();
    bigPicture.classList.add('hidden');
    document.body.classList.remove('modal-open');
  };

  const onPictureClick = (evt) => {
    evt.preventDefault();
    console.log(evt.target);
    bigPicture.classList.remove('hidden');
    document.body.classList.add('modal-open');
    const closeButton = document.querySelector('.big-picture__cancel');
    closeButton.addEventListener('click', modalClose);
  };

  picturesContainer.addEventListener('click', onPictureClick);
};
export { gallery };
