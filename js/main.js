/*

создаём массив из объектов.
Каждый объект состоит из:

id - число от 1 до 25
url - photos/{{i}}.jpg
description - придумать самому
likes - случайное число от 15 до 200.

*/
const MESSAGES = ['Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'];

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

const getRandomArrayElement = (array) => {
  retun array[getRandomInteger(0, NAMES.length - 1)]
};

const generateComment = () => {
  const randomName = NAMES[getRandomInteger(0, NAMES.length - 1)];
  const randomLastName = LAST_NAMES[getRandomInteger(0, LAST_NAMES.length - 1)];
  const commentAutor = randomName + ' ' + randomLastName;
  return {
    'name': commentAutor
  }
};

console.log(generateComment());

const generateObject = () => {
  let photoId = '';
  const photoUrl = 'photos/' + '' + '.jpg';
  return {
    'id': photoId,
    'url': photoUrl,
    'description': 'Пробная фотография',
    'likes': getRandomInteger(15, 200),
    'comments': []
  };
};

//console.log(generateObject());

