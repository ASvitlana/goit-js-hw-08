
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

const galleryContainer = document.querySelector('.gallery');
const imagesMarkup = createGalleryItemsEl(galleryItems);

galleryContainer.insertAdjacentHTML('beforeend', imagesMarkup);

function createGalleryItemsEl(items) {
    return galleryItems.map(({ preview,  original, description}) => {
        return `
            <a class="gallery__item" href="${original}">
                <img class="gallery__image" src="${preview}" alt="${description}" />
            </a>
        `;
    })
    .join('');
};

let gallery = new SimpleLightbox(".gallery__item", {
    captionsData: "alt",
    captionDelay: 250,
});



