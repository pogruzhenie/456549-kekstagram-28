import { getRandomInteger, getRandomArrayElement, createIdGenerator, getUnicRandomInteger } from './util.js';

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

const PHOTO_DESCRIPTIONS = [
  'Тестирую зеркалку',
  'Завалила немного горизонт',
  'Снято на старую «Нокию»',
  'Рядом с моим домом',
  'В этом снимке заложен глубокий философский смысл, недоступный большинству посетителей',
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

const generatePhotoId = createIdGenerator();
const generateCommentId = createIdGenerator();

const createComment = (avatarNumber, commentMessageKey) => {
  const comment = {
    id: generateCommentId(),
    avatar: `img/avatar-${avatarNumber}.svg`,
    message: MESSAGES[commentMessageKey],
    name: `${getRandomArrayElement(NAMES)} ${getRandomArrayElement(LAST_NAMES)}`
  };
  return comment;
};

const generateComments = () => {
  const comments = [];
  const avatarNumber = getUnicRandomInteger(1, AVATARS_COUNT);
  const commentMessageKey = getUnicRandomInteger(0, MESSAGES.length - 1);
  let commentsQuantityMax = COMMENTS_MAX_COUNT;

  if (MESSAGES.length < COMMENTS_MAX_COUNT) {
    commentsQuantityMax = MESSAGES.length;
  }

  const commentsQuantity = getRandomInteger(1, commentsQuantityMax);

  for (let i = 0; i < commentsQuantity; i++) {
    comments.push(createComment(avatarNumber(), commentMessageKey()));
  }

  return comments;
};

const generatePhotoObject = () => {
  const photoId = generatePhotoId();

  return {
    id: photoId,
    url: `photos/${photoId}.jpg`,
    description: getRandomArrayElement(PHOTO_DESCRIPTIONS),
    likes: getRandomInteger(LIKES_MIN_VALUE, LIKES_MAX_VALUE),
    comments: generateComments()
  };
};

const generatePhotos = () => Array.from({ length: PHOTOS_MAX_COUNT }, generatePhotoObject);

export { generatePhotos };
