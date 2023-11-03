const getRandInt = (intFrom, intTo) =>
  Math.round(intFrom - 0.5 + Math.random(intFrom, intTo) * (1 + intTo - intFrom));

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

const generateArray = (length, max) => (
  [...new Array(length)].map(() => Math.round(Math.random() * max)));

const photosId = generateArray(25,25);
const usersId = generateArray(25,25);

const getId = () => {
  const temp = usersId[getRandInt(0,usersId.length-1)];

  delete(usersId[getRandInt(0,usersId.length-1)]);
  return temp;
};

const getPhotoId = () => {
  const temp = photosId[getRandInt(0,photosId.length-1)];

  delete(photosId[getRandInt(0,photosId.length-1)]);
  return temp;
};

// eslint-disable-next-line no-unused-vars
const comment = {
  id: getId(),
  avatar: `img/avatar-${ getRandInt(0, 5) }.svg`,
  message: MESSAGES[getRandInt(0, 1)],
  name: NAMES[getRandInt(0,NAMES.length-1)]
};
// eslint-disable-next-line no-unused-vars
const photo = {
  id: getPhotoId(),
  url: `photos/${getPhotoId()}.jpg`,
  description: 'Описание фотографии',
  likes: `Количество лайков: ${getRandInt(15, 200)}`,
  comments: MESSAGES[getRandInt(0, 1)]
};
