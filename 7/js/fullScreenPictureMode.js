import { EscKeyCheck } from './util.js';

const fullScreenPicture = document.querySelector('.big-picture');
const body = document.body;
const closeButton = fullScreenPicture.querySelector('#picture-cancel');

const printComments = (comments) => {
  const commentsContainer = fullScreenPicture.querySelector('.social_comments');
  const commentTemplate = fullScreenPicture.querySelector('.social__comment');
  const fragment = document.createDocumentFragment();

  comments.forEach((comment) => {
    const clonedComment = commentTemplate.cloneNode(true);
    const {avatar, name, message} = comment;
    clonedComment.querySelector('.social__picture').src = avatar;
    clonedComment.querySelector('.social__picture').alt = name;
    clonedComment.querySelector('.social__text').textContent = message;
    fragment.append(clonedComment);
  });
  commentsContainer.append(fragment);
};

const closeFullScreenPicture = () => {
  body.classList.remove('modal-open');
  fullScreenPicture.classList.add('hidden');
  document.removeEventListener('keydown', closeByEscape);
};

//function использована чтобы эта и closeFullScreenPicture функции не закольцовывались
function closeByEscape() {
  if (EscKeyCheck) {
    closeFullScreenPicture();
  }
}

const openPicture = (picture) => {
  body.classList.add('modal-open');
  fullScreenPicture.classList.remove('hidden');

  const {url, description, likes, comments} = picture;
  fullScreenPicture.querySelector('.big-picture__img img').src = url;
  fullScreenPicture.querySelector('.likes-count').textContent = likes;
  fullScreenPicture.querySelector('.comments-count').textContent = comments.length;
  printComments(picture.comments);
  fullScreenPicture.querySelector('.social__caption').textContent = description;
  fullScreenPicture.querySelector('.social__comment-count').classList.add('hidden');
  fullScreenPicture.querySelector('.comments-loader').classList.add('hidden');
  closeButton.addEventListener('click', closeFullScreenPicture);
  document.addEventListener('keydown', closeByEscape);
};

export {openPicture};
