/*

создаём массив из объектов.
Каждый объект состоит из:

id - число от 1 до 25
url - photos/{{i}}.jpg
description - придумать самому
likes - случайное число от 15 до 200.

*/

const COMMENTS_MAX_COUNT = 6;
const AVATARS_COUNT = 6;
const PHOTOS_MAX_COUNT = 25;
const LIKES_MIN_VALUE = 15;
const LIKES_MAX_VALUE = 200;

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

const getRandomInteger = (min, max) => {
  const lower = Math.ceil(Math.min(Math.abs(min), Math.abs(max)));
  const upper = Math.floor(Math.max(Math.abs(min), Math.abs(max)));
  const result = Math.random() * (upper - lower + 1) + lower;

  return Math.floor(result);
};

const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];

const createIdGenerator = () => {
  let lastGeneratedId = 0;

  return function () {
    lastGeneratedId += 1;
    return lastGeneratedId;
  };
};

const generatePhotoId = createIdGenerator();
const generateCommentId = createIdGenerator();

const generateComment = () => {

  return {
    'id': generateCommentId(),///фигачим генератор
    'avatar': 'img/avatar' + getRandomInteger(1, AVATARS_COUNT) + '.svg',// желательно, чтоб в массиве не повторялись
    'message': getRandomArrayElement(MESSAGES),
    'name': getRandomArrayElement(NAMES) + ' ' + getRandomArrayElement(LAST_NAMES)
  };
};

//const comments = Array.from({length: getRandomInteger(1, COMMENTS_MAX_COUNT)}, generateComment);

const generatePhotoObject = () => {
  const photoId = generatePhotoId();
  return {
    'id': photoId,
    'url': 'photos/' + photoId + '.jpg',
    'description': 'Пробная фотография',
    'likes': getRandomInteger(LIKES_MIN_VALUE, LIKES_MAX_VALUE),
    'comments': Array.from({length: getRandomInteger(1, COMMENTS_MAX_COUNT)}, generateComment)
  };
};

const photosArray = Array.from({length: PHOTOS_MAX_COUNT}, generatePhotoObject);

console.log(photosArray);
