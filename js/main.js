import { generatePhotos } from './data.js';
import { addPictures } from './thumbnails.js';
import { showDetail } from './detail.js'
import './form.js';

const randomPhotos = generatePhotos();
addPictures(randomPhotos);
showDetail(randomPhotos);
