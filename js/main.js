import { generatePhotos } from './data.js';
import { addPictures } from './pictures.js';
import { gallery } from './gallery.js';

addPictures(generatePhotos());

gallery();
