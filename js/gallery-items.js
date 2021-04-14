import galleryImages from './gallery-images.js';



const makeMarkUpImagesGallery = function (image)  {

        //==================================создали разметку======================//
const liGalleryItemEl = document.createElement('li');
liGalleryItemEl.classList.add('gallery__item');

// const linkGalleryEl = document.createElement('a');
// linkGalleryEl.classList.add('gallery__link');
// linkGalleryEl.href = image.original;

const imgGalleryEl = document.createElement('img');
imgGalleryEl.classList.add('gallery__image');
imgGalleryEl.src = image.preview;
imgGalleryEl.setAttribute('data-source', image.original) 
imgGalleryEl.alt = image.description;

//linkGalleryEl.append(imgGalleryEl);
//liGalleryItemEl.append(linkGalleryEl);
   liGalleryItemEl.append(imgGalleryEl); 
//==================================создали разметку======================//
//==================================рендер разметки======================//
    containerGalleryImages.append(liGalleryItemEl);
    return liGalleryItemEl;
  
 };

const containerGalleryImages = document.querySelector('ul.js-gallery');
const makeImagesGallery = galleryImages.map(makeMarkUpImagesGallery).join('');
//==================================рендер разметки======================//

const containerModal = document.querySelector('div.js-lightbox');
const closeLightboxBtnEl = document.querySelector('div.js-lightbox button[data-action="close-lightbox"]');


containerGalleryImages.addEventListener('click', onClickGalleryImage);
function onClickGalleryImage(event) {
    if (event.target.nodeName !== 'IMG') {
        return
    } else if (event.target.nodeName === 'IMG') {
        containerModal.classList.add('is-open');
    }
    console.log(event.target.nodeName);
}

closeLightboxBtnEl.addEventListener('click', onClickBtnCloseLightbox);
function onClickBtnCloseLightbox(event) {
    containerModal.classList.remove('is-open');
    console.log(event.target.nodeName);
}






    //   <li class="gallery__item">
    //     <a
    //       class="gallery__link"
    //       href="https://cdn.pixabay.com/photo/2010/12/13/10/13/tulips-2546_1280.jpg"
    //     >
    //       <img
    //         class="gallery__image"
    //         src="https://cdn.pixabay.com/photo/2010/12/13/10/13/tulips-2546__340.jpg"
    //         data-source="https://cdn.pixabay.com/photo/2010/12/13/10/13/tulips-2546_1280.jpg"
    //         alt="Tulips"
    //       />
    //     </a>
    //   </li>