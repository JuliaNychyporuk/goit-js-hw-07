import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryListContainer = document.querySelector('.gallery')

function creategalleryItemsMarkUp (items) {
   
   const galleryItems = items.reduce((acc, {original, preview, description}) => { 
    
    const template = `<li class="gallery__item">
    <a class="gallery__link" href="${original}">
      <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
      />
    </a>
  </li>`
    return acc += template}, '')
    
    galleryListContainer.innerHTML = galleryItems
   
}

creategalleryItemsMarkUp(galleryItems)

let lightbox = new SimpleLightbox('.gallery__link', {captionDelay: 250, captionsData: 'alt'})