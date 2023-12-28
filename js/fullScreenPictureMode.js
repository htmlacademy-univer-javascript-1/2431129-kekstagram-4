import { EscKeyCheck } from './util.js';
const NUMBER_LOADED_COMMENTS = 5;
const fullScreenPicture = document.querySelector('.big-picture');
const body = document.body;
const closeButton = fullScreenPicture.querySelector('#picture-cancel');
const loaderButton = fullScreenPicture.querySelector('.comments-loader');
const currentComments = fullScreenPicture.querySelector('.current-comments');
const commentTemplate = document.querySelector('#social__comment').content.querySelector('.social__comment');

const createComment = (comment) => {
  const clonedComment = commentTemplate.cloneNode(true);
  const {avatar, name, message} = comment;
  clonedComment.querySelector('.social__picture').src = avatar;
  clonedComment.querySelector('.social__picture').alt = name;
  clonedComment.querySelector('.social__text').textContent = message;
  clonedComment.classList.add('hidden');
  return clonedComment;
};

const printComments = (comments) => {
  const commentsContainer = fullScreenPicture.querySelector('.social__comments');
  const fragment = document.createDocumentFragment();
  comments.forEach((comment) => {
    const newComment = createComment(comment);
    fragment.append(newComment);
  });
  commentsContainer.innerHTML = '';
  commentsContainer.append(fragment);
};

const closeFullScreenPicture = () => {
  body.classList.remove('modal-open');
  fullScreenPicture.classList.add('hidden');
  document.removeEventListener('keydown', closeByEscape);
  closeButton.removeEventListener('click', closeFullScreenPicture);
};

//function использована чтобы эта и closeFullScreenPicture функции не закольцовывались
function closeByEscape() {
  if (EscKeyCheck) {
    closeFullScreenPicture();
  }
}

const openComments = () => {
  const hiddenComments = fullScreenPicture.querySelectorAll('.social__comment.hidden');
  let commentsNumber = NUMBER_LOADED_COMMENTS;
  const hiddenCommentsNumber = hiddenComments.length;
  if (hiddenCommentsNumber < NUMBER_LOADED_COMMENTS) {
    commentsNumber = hiddenCommentsNumber;
  }
  currentComments.textContent = Number(currentComments.textContent) + commentsNumber;
  for (let i = 0; i < commentsNumber; i++) {
    hiddenComments[i].classList.remove('hidden');
  }
  if (hiddenCommentsNumber - commentsNumber === 0) {
    fullScreenPicture.querySelector('.comments-loader').classList.add('hidden');
  }
};

const openPicture = (picture) => {
  body.classList.add('modal-open');
  fullScreenPicture.classList.remove('hidden');
  const {url, description, likes, comments} = picture;
  fullScreenPicture.querySelector('.big-picture__img img').src = url;
  fullScreenPicture.querySelector('.likes-count').textContent = likes;
  fullScreenPicture.querySelector('.comments-count').textContent = comments.length;
  printComments(picture.comments);
  fullScreenPicture.querySelector('.social__caption').textContent = description;
  fullScreenPicture.querySelector('.comments-loader').classList.remove('hidden');
  currentComments.textContent = 0;
  openComments();
  loaderButton.addEventListener('click', openComments);
  closeButton.addEventListener('click', closeFullScreenPicture);
  document.addEventListener('keydown', closeByEscape);
};

export {openPicture};
