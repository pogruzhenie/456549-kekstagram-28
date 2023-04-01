const addPictures = (picturesData) => {

  const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');
  const picturesList = document.querySelector('.pictures');

  const picturesListFragment = document.createDocumentFragment();

  picturesData.forEach((pictureObject) => {
    const picture = pictureTemplate.cloneNode(true);
    const pictureImg = picture.querySelector('.picture__img');
    pictureImg.src = pictureObject.url;
    pictureImg.alt = pictureObject.description;
    picture.querySelector('.picture__likes').textContent = pictureObject.likes;
    picture.querySelector('.picture__comments').textContent = pictureObject.comments.length;
    picturesListFragment.append(picture);
  });

  picturesList.append(picturesListFragment);

};

export { addPictures };
