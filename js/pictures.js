import { generatePhotos } from './data.js';

const picturesData = generatePhotos();
const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');
const picturesList = document.querySelector('.pictures');
console.log(pictureTemplate);

const picturesListFragment = document.createDocumentFragment();

picturesData.forEach((pictureObject) => {
  const picture = pictureTemplate.cloneNode(true);
  //var task = newItemTemplate.cloneNode(true);
  picture.querySelector('.picture__img').src = pictureObject.url;
  picture.querySelector('.picture__likes').textContent = pictureObject.likes;
  picture.querySelector('.picture__comments').textContent = pictureObject.comments.length;
  console.log(picture);
  picturesListFragment.append(picture);
});

console.log(picturesData);
console.log('module has connected');

picturesList.append(picturesListFragment);
//.pictures
