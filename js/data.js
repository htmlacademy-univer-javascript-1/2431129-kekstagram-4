import { getRandInt, getRandArrElem } from './util.js';

const UPPER_BOUND_OBJ = 25;
const LOWER_BOUND_OBJ = 1;
const UPPER_BOUND_LIKES = 200;
const LOWER_BOUND_LIKES = 15;
const UPPER_BOUND_IMG = 6;
const LOWER_BOUND_IMG = 1;
const MIN_OF_COMMENTS = 0;
const MAX_OF_COMMENTS = 30;
const MAX_OF_PHOTOS = 25;

const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const NAMES = [
  'Павел',
  'Данил',
  'Артём',
  'Егор',
  'Влад',
  'Дмитрий'
];

const DESCRIPTIONS = ['Фото', 'Мой новый дом', 'Фотки с путешествия'];

const getId = () => {
  let currentId = 0;
  return () => ++currentId;
};

const getIdComments = getId();
const getIdPhotos = getId();

const createComment = () => ({
  id: getIdComments(),
  avatar: `img/avatar-${getRandInt(LOWER_BOUND_IMG, UPPER_BOUND_IMG)}.svg`,
  message: getRandArrElem(MESSAGES),
  name: getRandArrElem(NAMES)
});

const createPhotoDescription = () => ({
  id: getIdPhotos(),
  url: `photos/${getRandInt(LOWER_BOUND_OBJ, UPPER_BOUND_OBJ)}.jpg`,
  description: getRandArrElem(DESCRIPTIONS),
  likes: getRandInt(LOWER_BOUND_LIKES, UPPER_BOUND_LIKES),
  comments: Array.from({length: getRandInt(MIN_OF_COMMENTS, MAX_OF_COMMENTS)}, () => createComment())
});

const arrOfPhotoDescriptions = () =>  Array.from({length: MAX_OF_PHOTOS}, () => createPhotoDescription());

export {arrOfPhotoDescriptions};
