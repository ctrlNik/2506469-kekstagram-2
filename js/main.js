import {posts} from './data.js';
import {createRenderPictures} from './render-picture.js';
import { openModal } from './manipulation-modal.js';
import { editPhotoScale } from "./photo-setting";
import { editPhotoModal, closePhotoModal, postForm } from './editPhotoModal.js';

createRenderPictures(posts);
openModal(posts);
editPhotoModal();
closePhotoModal();
editPhotoScale();
postForm();
