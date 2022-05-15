import SimpleLightbox from "simplelightbox";
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
const galleryItemsContainer = document.querySelector('.gallery');
const galleryItemsMarkup = createGalleryItemCardMarkup(galleryItems);

galleryItemsContainer.insertAdjacentHTML('afterbegin', galleryItemsMarkup);
galleryItemsContainer.addEventListener('click', onGalleryItemsContainerClick);

function createGalleryItemCardMarkup(galleryItems) {

    return galleryItems.map(({ preview, original, description }) => {
        return `<a class="gallery__item" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      alt="${description}"
    />
  </a>`;
    }).join('');
}

//click place check
function onGalleryItemsContainerClick(evt) {
    evt.preventDefault();
    
    if (evt.target.nodeName !== "IMG") {
        return;
    }
    }
const gallery = new SimpleLightbox('.gallery a', { captionsData: `alt`, captionPosition: 'bottom', captionDelay: 250 });
// gallery.on('show.simplelightbox');  
console.log(galleryItems);
