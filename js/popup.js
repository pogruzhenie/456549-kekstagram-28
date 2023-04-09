import { isEscapeKey } from './util.js';


const manageModal = (popup, closeButton, onCloseFunction) => {

  let closeModal = {};

  const onCloseModal = () => {
    popup.classList.add('hidden');
    document.body.classList.remove('modal-open');
    if (onCloseFunction && onCloseFunction()) {
      onCloseFunction();
    }
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
    //console.log('openModal has called');
    popup.classList.remove('hidden');
    document.body.classList.add('modal-open');
    closeButton.addEventListener('click', closeModal);
    document.addEventListener('keydown', onDocumentKeydown);

  };

  openModal(popup, closeButton, onCloseFunction);

};

export { manageModal };
