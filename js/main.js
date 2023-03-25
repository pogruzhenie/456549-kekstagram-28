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

function createRandomIdFromRangeGenerator(min, max) {
  const previousValues = [];

  return function () {
    let currentValue = getRandomInteger(min, max);
    if (previousValues.length >= (max - min + 1)) {
      return null;
    }
    while (previousValues.includes(currentValue)) {
      currentValue = getRandomInteger(min, max);
    }
    previousValues.push(currentValue);
    return currentValue;
  };
}

const createComment = (avatarCounter, commentMessageKey) => {
  const comment = {
    id: generateCommentId(),///фигачим генератор
    avatar: `img/avatar-${avatarCounter}.svg`,// желательно, чтоб в массиве не повторялись
    message: MESSAGES[commentMessageKey],
    name: `${getRandomArrayElement(NAMES)} ${getRandomArrayElement(LAST_NAMES)}`
  };
  return comment;
};


const generateComments = () => {
  const comments = [];
  const avatarCounter = createRandomIdFromRangeGenerator(1, AVATARS_COUNT);
  const commentMessageKey = createRandomIdFromRangeGenerator(0, MESSAGES.length - 1);
  let commentsQuantityMax = COMMENTS_MAX_COUNT;

  if (MESSAGES.length < COMMENTS_MAX_COUNT) {
    commentsQuantityMax = MESSAGES.length;
  }

  const commentsQuantity = createRandomIdFromRangeGenerator(1, commentsQuantityMax);

  for (let i = 0; i < commentsQuantity(); i++) {
    comments.push(createComment(avatarCounter(), commentMessageKey()));
  }

  return comments;
};


const generatePhotoObject = () => {
  const photoId = generatePhotoId();
  return {
    id: photoId,
    url: `photos/${photoId}.jpg`,
    description: 'Пробная фотография',
    likes: getRandomInteger(LIKES_MIN_VALUE, LIKES_MAX_VALUE),
    comments: generateComments()
  };
};

const photosArray = Array.from({ length: PHOTOS_MAX_COUNT }, generatePhotoObject);

console.log(photosArray);

