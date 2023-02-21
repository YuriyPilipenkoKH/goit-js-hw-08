// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

import SimpleLightbox from "simplelightbox";
// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";

const gal = document.querySelector('.gallery')


const myMarkup =  galleryItems.map(item => `<a class="gallery__link" href="${item.original}" >
<img class="gallery__image" src="${item.preview}" data-src="${item.original}" alt="${item.description}">
</a>`).join('')


gal.insertAdjacentHTML('afterbegin', myMarkup)

const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
});