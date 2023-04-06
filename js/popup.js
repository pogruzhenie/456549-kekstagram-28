import { isEscapeKey } from './util.js';

const popup = document.querySelector('.big-picture');
const closeButton = popup.querySelector('.big-picture__cancel');

let closeModal = {};

const onCloseModal = () => {
  popup.classList.add('hidden');
  document.body.classList.remove('modal-open');
};

const onDocumentKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    document.removeEventListener('keydown', onDocumentKeydown);
    closeButton.removeEventListener('click', closeModal);
    onCloseModal();
  }
};

closeModal = (evt) => {
  evt.preventDefault();
  document.removeEventListener('keydown', onDocumentKeydown);
  closeButton.removeEventListener('click', closeModal);
  onCloseModal();
};

const openModal = () => {
  popup.classList.remove('hidden');
  document.body.classList.add('modal-open');
  closeButton.addEventListener('click', closeModal);
  document.addEventListener('keydown', onDocumentKeydown);
};

export { onCloseModal, onDocumentKeydown, closeModal, openModal };
