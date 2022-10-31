import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryEl = document.querySelector(".gallery");

galleryEl.addEventListener("click", onClickGallery);

const markup = galleryItems.map(({original, preview, description}) =>
    `
    <div class="gallery__item">
        <a class="gallery__link" href="${original}">
            <img
              class="gallery__image"
              src="${preview}"
              data-source="${original}"
              alt="${description}"
            />
        </a>
    </div>
    `).join("");

galleryEl.insertAdjacentHTML("beforeend", markup);

function onClickGallery(e) {
    e.preventDefault();

    basicLightbox.create(`
    <img src="${e.target.dataset.source}" width="800" height="600">
`).show();
}




