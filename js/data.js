import { getRandInt, getRandArrElem, getId } from './util.js';

const UPPER_BOUND_OBJ = 25;
const LOWER_BOUND_OBJ = 1;
const UPPER_BOUND_LIKES = 200;
const LOWER_BOUND_LIKES = 15;
const UPPER_BOUND_IMG = 6;
const LOWER_BOUND_IMG = 1;
const MAX_OF_COMMENTS = 30;
const MAX_OF_PHOTOS = 25;

const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.'
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

const getIdComments = getId();
const getIdPhotos = getId();

const createComment = () => ({
  id: getIdComments(),
  avatar: `img/avatar-${getRandInt(LOWER_BOUND_IMG, UPPER_BOUND_IMG)}.svg`,
  message: getRandArrElem(MESSAGES),
  name: getRandArrElem(NAMES)
});

const arrOfComments = Array.from({length: MAX_OF_COMMENTS}, createComment);

const createPhotoDescription = () => ({
  id: getIdPhotos(),
  url: `photos/${getRandInt(LOWER_BOUND_OBJ, UPPER_BOUND_OBJ)}.jpg`,
  description: getRandArrElem(DESCRIPTIONS),
  likes: getRandInt(LOWER_BOUND_LIKES, UPPER_BOUND_LIKES),
  comments: getRandArrElem(arrOfComments)
});

const arrOfPhotoDescriptions = () =>  Array.from({length: MAX_OF_PHOTOS}, createPhotoDescription);

export {arrOfPhotoDescriptions};
