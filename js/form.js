import { manageModal } from './popup.js';
import { isEscapeKey } from './util.js';

const HASTAG_ERROR = 'Хэштег должен начинаться с символа #';
const HASTAG_REG = /^#[a-zа-яё0-9]{1,19}$/i;

const photoUploadForm = document.querySelector('#upload-select-image');
const photoUploadControl = photoUploadForm.querySelector('#upload-file');
const imgUploadOverlay = document.querySelector('.img-upload__overlay');
const closeButton = document.querySelector('#upload-cancel');
const descriptionField = photoUploadForm.querySelector('.text__description');
const hashtagField = photoUploadForm.querySelector('.text__hashtags');

const cancelOnKeyClose = (evt) => {
  if (isEscapeKey(evt)) {
    evt.stopPropagation();
  }
};

const onDescriptionInputFocus = () => {
  descriptionField.addEventListener('keydown', cancelOnKeyClose);
};
const onHashtagInputFocus = () => {
  hashtagField.addEventListener('keydown', cancelOnKeyClose);
};

const onDescriptionInputBlur = () => {
  descriptionField.addEventListener('keydown', cancelOnKeyClose);
};
const onHashtagInputBlur = () => {
  hashtagField.removeEventListener('keydown', cancelOnKeyClose);
};

const pristine = '';

//const pristine = new Pristine (photoUploadForm, {
//  classTo: 'img-upload__message',
//  errorTextParent: 'img-upload__wrapper',
//  errorTextClass: 'img-upload__message--error'
//});

//const validateHashtags = (value) => {
//  const tags = value.trim().split(' ').filter((tag) => tag.trim().lenght);
//  return false;
//};
//console.log(validateHashtags('vfvfv'));
//pristine.addValidator(hashtagField, validateHashtags, HASTAG_ERROR);

//const onFormSubmit = (evt) => {
//  evt.preventDefault();
//  const isValid = pristine.validate();
//  if (isValid) {
//    console.log('Можно отправлять');
//  } else {
//    console.log('Форма невалидна');
//  }
//};

const resetForm = (form) => {
  photoUploadForm.reset();
  //form.reset();
  descriptionField.removeEventListener('focus', onDescriptionInputFocus);
  hashtagField.removeEventListener('focus', onHashtagInputFocus);
  descriptionField.removeEventListener('blur', onDescriptionInputBlur);
  hashtagField.removeEventListener('blur', onHashtagInputBlur);
  descriptionField.removeEventListener('keydown', cancelOnKeyClose);
  hashtagField.removeEventListener('keydown', cancelOnKeyClose);
};

const onPhotoUpload = (evt) => {
  //photoUploadForm.addEventListener('submit', onFormSubmit);
  //co
  descriptionField.addEventListener('focus', onDescriptionInputFocus);
  hashtagField.addEventListener('focus', onHashtagInputFocus);

  descriptionField.addEventListener('blur', onDescriptionInputBlur);
  hashtagField.addEventListener('blur', onHashtagInputBlur);

  manageModal(imgUploadOverlay, closeButton, resetForm);
};

photoUploadControl.addEventListener('change', onPhotoUpload);
