import galleryImages from './gallery-images.js';

const containerGalleryImages = document.querySelector('ul.js-gallery');
const containerModal = document.querySelector('div.js-lightbox');
const closeLightboxBtnEl = document.querySelector('button[data-action="close-lightbox"]');
const modalImageEl = document.querySelector('img.lightbox__image');
const lightboxOverlay = document.querySelector('div.lightbox__overlay');


const makeMarkUpImagesGallery = function (image)  {  
     const liGalleryItemEl = document.createElement('li');
     liGalleryItemEl.classList.add('gallery__item');

     const linkGalleryEl = document.createElement('a');
     linkGalleryEl.classList.add('gallery__link');
     linkGalleryEl.href = image.original;

     const imgGalleryEl = document.createElement('img');
     imgGalleryEl.classList.add('gallery__image');
     imgGalleryEl.src = image.preview;
     imgGalleryEl.setAttribute('data-source', image.original);
     imgGalleryEl.alt = image.description;

     linkGalleryEl.append(imgGalleryEl);
     liGalleryItemEl.append(linkGalleryEl);
     containerGalleryImages.append(liGalleryItemEl);
     return liGalleryItemEl;  
 };

const makeImagesGallery = galleryImages.map(makeMarkUpImagesGallery).join('');

containerGalleryImages.addEventListener('click', onClickGalleryImageOpenModal);

function onClickGalleryImageOpenModal(event) {
    event.preventDefault();

    closeLightboxBtnEl.addEventListener('click', onClickCloseModal);
    lightboxOverlay.addEventListener('click', onClickCloseModal);
    window.addEventListener('keydown', onClickEscCloseModal);

    closeLightboxBtnEl.textContent = 'X';
   
    if (event.target.nodeName !== 'IMG') {
        return
    } else (containerModal.classList.add('is-open'));
    modalImageEl.src = event.target.dataset.source;
    modalImageEl.alt = event.target.alt;
}

function onClickCloseModal(event) {
    closeLightboxBtnEl.removeEventListener('click', onClickCloseModal);
    lightboxOverlay.removeEventListener('click', onClickCloseModal);
    window.removeEventListener('keydown', onClickEscCloseModal);

    containerModal.classList.remove('is-open');
    modalImageEl.src = '';
    modalImageEl.alt = '';
}

function onClickEscCloseModal(event) {
    if (event.code === 'Escape') {
       containerModal.classList.remove('is-open'); 
    }
}








