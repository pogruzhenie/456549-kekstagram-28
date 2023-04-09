import { manageModal } from './popup.js';
import { isEscapeKey } from './util.js';

const photoUploadForm = document.querySelector('#upload-select-image');
const photoUploadControl = photoUploadForm.querySelector('#upload-file');
const imgUploadOverlay = document.querySelector('.img-upload__overlay');
const closeButton = document.querySelector('#upload-cancel');

const onDocumentKeydownForm = (evt) => {
  if (isEscapeKey(evt)) {
    evt.stopPropagation();
  }
};

const onCloseForm = () => {
  photoUploadForm.reset();
};

const validateForm = (form) => {
  const formForValidation = new Pristine(form);

  form.addEventListener('submit', (evt) => {
    evt.preventDefault();
    const isValid = formForValidation.validate();
    if (isValid) {
      console.log('Можно отправлять');
    } else {
      console.log('Форма невалидна');
    }
  });
};

const onPhotoUpload = () => {

  const descriptionField = photoUploadForm.querySelector('.text__description');
  const hashtagField = photoUploadForm.querySelector('.text__hashtags');

  manageModal(imgUploadOverlay, closeButton, onCloseForm);

  descriptionField.addEventListener('focus', () => {
    descriptionField.addEventListener('keydown', onDocumentKeydownForm);
  });

  hashtagField.addEventListener('focus', () => {
    hashtagField.addEventListener('keydown', onDocumentKeydownForm);
  });

  validateForm(photoUploadForm);
};

photoUploadControl.addEventListener('change', onPhotoUpload);
