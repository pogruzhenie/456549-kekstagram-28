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

const NAMES = ['Артём',
  'Кекс',
  'Алексей',
  'Марина',
  'Рахат',
  'Варвара',
  'Елена',
  'Руслан',
  'Антон',
  'Сергей'];

const getRandomInteger = (min, max) => {
  const lower = Math.ceil(Math.min(Math.abs(min), Math.abs(max)));
  const upper = Math.floor(Math.max(Math.abs(min), Math.abs(max)));
  const result = Math.random() * (upper - lower + 1) + lower;

  return Math.floor(result);
};

const generateComments = (length) => {
//количество комментариев к фотографии
  let comments = [];
  for (let i = 0; i <= length; i++){
    comments[i] = {
      'id': 135,//Замыкание!!!
      'avatar': 'img/avatar-' + getRandomInteger(1, 6) + '.svg',
      'message': MESSAGES[getRandomInteger(0, MESSAGES.length - 1)],
      'name': 'Артём'
    };
  }
  return comments;
};

const generateData = (length) => {
  //console.log(length);
  let dataTemp = [];
  //console.log(dataTemp);
  for(let i = 1; i <= length; i++) {
    dataTemp[i] = {'id': i,
      'url': 'photos/' + i + '.jpg',
      'description': 'Пробная фотография',
      'likes': getRandomInteger(15, 200),
      'comments': generateComments(getRandomInteger(1, MESSAGES.length))
    };
  }
  return dataTemp;
};

console.log(generateData(25));
console.log(MESSAGES);
