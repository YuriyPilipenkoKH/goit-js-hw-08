import SimpleLightbox from "simplelightbox";
// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line


const gall = document.querySelector('.gallery');

const myMarkup =  galleryItems.map(item => `<a class="gallery__item" href="${item.original}" >
<img class="gallery__image" src="${item.preview}" data-source="${item.original}" alt="${item.description}">
</a>`).join('');

gall.insertAdjacentHTML('afterbegin', myMarkup);

const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
});