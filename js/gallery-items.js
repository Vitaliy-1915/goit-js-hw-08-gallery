import galleryImages from './gallery-images.js';



const makeMarkUpImagesGallery = function (image)  {

        //==================================создали разметку======================//
const liGalleryItemEl = document.createElement('li');
liGalleryItemEl.classList.add('gallery__item');

const linkGalleryEl = document.createElement('a');
linkGalleryEl.classList.add('gallery__link');
linkGalleryEl.href = image.original;

const imgGalleryEl = document.createElement('img');
imgGalleryEl.classList.add('gallery__image');
imgGalleryEl.src = image.preview;
imgGalleryEl.setAttribute('data-source', image.original) 
imgGalleryEl.alt = image.description;

linkGalleryEl.append(imgGalleryEl);
liGalleryItemEl.append(linkGalleryEl);
//==================================создали разметку======================//
//==================================рендер разметки======================//
    ulJsGalleryEl.append(liGalleryItemEl);
    return liGalleryItemEl;
  
 };

const ulJsGalleryEl = document.querySelector('.js-gallery');
const makeImagesGallery = galleryImages.map(makeMarkUpImagesGallery).join('');
console.log(ulJsGalleryEl);

//==================================рендер разметки======================//










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