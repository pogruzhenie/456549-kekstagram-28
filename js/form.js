import { manageModal } from './popup.js';
console.log('form module connected');

const photoUploadControl = document.querySelector('#upload-file');

const onPhotoUpload = (evt) => {
  console.log(evt.target);
  console.log('input changed');

  const imgUploadOverlay = document.querySelector('.img-upload__overlay');
  const closeButton = document.querySelector('#upload-cancel');

  //imgUploadOverlay.classList.remove('hidden');
  //document.body.classList('modal-open');
  manageModal(imgUploadOverlay, closeButton);
  //closeButton
};

photoUploadControl.addEventListener('change', onPhotoUpload);
