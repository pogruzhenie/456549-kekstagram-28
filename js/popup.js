import { isEscapeKey } from './util.js';

const onCloseModal = (popup) => {
  popup.classList.add('hidden');
  document.body.classList.remove('modal-open');
};

const onDocumentKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    document.removeEventListener('keydown', onDocumentKeydown);
    onCloseModal();
  }
};

const closeModal = (evt) => {
  evt.preventDefault();
  onCloseModal();
  document.removeEventListener('keydown', onDocumentKeydown);
};

const openModal = (popup, closeButton) => {
  popup.classList.remove('hidden');
  document.body.classList.add('modal-open');
  closeButton.addEventListener('click', closeModal);
  document.addEventListener('keydown', onDocumentKeydown);
};

export { onCloseModal, onDocumentKeydown, closeModal, openModal };
