const getRandInt = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const getRandArrElem = (elements) => elements[getRandInt(0, elements.length - 1)];

const EscKeyCheck = (evt) => evt.key === 'Escape';

export {getRandInt, getRandArrElem, EscKeyCheck};
