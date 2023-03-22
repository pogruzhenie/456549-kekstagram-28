/*

создаём массив из объектов.
Каждый объект состоит из:

id - число от 1 до 25
url - photos/{{i}}.jpg
description - придумать самому
likes - случайное число от 15 до 200.

*/
const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const NAMES = [
  'Артём',
  'Валера',
  'Алексей',
  'Олег',
  'Рахат',
  'Димон',
  'Евгений',
  'Руслан',
  'Антон',
  'Сергей'
];

const LAST_NAMES = [
  'Смирнов',
  'Иванов',
  'Кузнецов',
  'Соколов',
  'Попов',
  'Лебедев',
  'Козлов',
  'Новиков',
  'Морозов',
  'Петров',
  'Волков'
];
const COMMENTS_MAX_COUNT = 6;
const PHOTOS_MAX_COUNT = 25;

let commentId = 0;

console.log (commentId);

const getRandomInteger = (min, max) => {
  const lower = Math.ceil(Math.min(Math.abs(min), Math.abs(max)));
  const upper = Math.floor(Math.max(Math.abs(min), Math.abs(max)));
  const result = Math.random() * (upper - lower + 1) + lower;

  return Math.floor(result);
};

const getRandomArrayElement = (elements) => {
  return elements[getRandomInteger(0, elements.length - 1)];

};

const generateComment = () => {
  console.log(commentId);
  commentId++;
  console.log(commentId);
  return {
    'id': commentId,
    'avatar': 'img/avatar' + getRandomInteger(1, COMMENTS_MAX_COUNT) + '.svg',// желательно, чтоб в массиве не повторялись
    'message': getRandomArrayElement(MESSAGES),
    'name': getRandomArrayElement(NAMES) + ' ' + getRandomArrayElement(LAST_NAMES)
  }
};

const comments = Array.from({length: getRandomInteger(1, COMMENTS_MAX_COUNT)}, generateComment);
console.log(generateComment());

const generatePhotoObject = () => {
  let photoId = 0;
  photoId++;
  return {
    'id': photoId,
    'url': 'photos/' + photoId + '.jpg',
    'description': 'Пробная фотография',
    'likes': getRandomInteger(15, 200),
    'comments': Array.from({length: getRandomInteger(1, COMMENTS_MAX_COUNT)}, generateComment)
  };
};

const photosArray = Array.from({length: 25}, generatePhotoObject);

console.log(comments);
console.log(photosArray);
