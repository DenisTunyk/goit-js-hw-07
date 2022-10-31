import { galleryItems } from './gallery-items.js';
// Change code below this line

//console.log(galleryItems);

const galleryEl = document.querySelector(".gallery");

galleryEl.addEventListener("click", onClickGallery);

const markup = galleryItems.map(({original, preview, description}) =>
    `
    <a class="gallery__item" href="${original}">
        <img class="gallery__image" src="${preview}" alt="${description}" />
    </a>
`).join("");

galleryEl.insertAdjacentHTML("beforeend", markup);

function onClickGallery(e) {
    e.preventDefault();

    let gallery = new SimpleLightbox('.gallery a',{captionsData: "alt", captionDelay: 250,});
        gallery.on('show.simplelightbox', function () {
	    // do something…
    });
}



