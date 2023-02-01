import { galleryItems } from './gallery-items.js';

console.log(galleryItems)
// Change code below this line
const galleryListContainer = document.querySelector('.gallery')

function creategalleryItemsMarkUp (items) {
   
   const galleryIitems = items.reduce((acc, {original, preview, description}) => { 
    
    const template = `<div class="gallery__item">
    <a class="gallery__link" href="${original}">
      <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
      />
    </a>
  </div>`
    return acc += template}, '')
    
    galleryListContainer.innerHTML = galleryIitems
   
}

creategalleryItemsMarkUp(galleryItems)

galleryListContainer.addEventListener('click', onFullScreenSizeImageClick)

const instance = basicLightbox.create(
  `<img width="1400" height="900" src = ''>`, {
    onShow: instance => {window.addEventListener('keydown', onEscClick)
  },
    onClose: instance => {window.addEventListener('keydown', onEscClick)
  }
})

function onFullScreenSizeImageClick (evt) {
  
  evt.preventDefault()

  if (evt.target.nodeName !== 'IMG') {
    return
  }

  instance.element().querySelector('img').src = evt.target.dataset.source;

  instance.show();
}

function onEscClick (evt) {
    if (evt.key === 'Escape') {
    instance.close()
    return}
}