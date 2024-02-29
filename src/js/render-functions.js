import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const gallery = document.querySelector('.gallery');

export function createMarkup(data) {

    if (data.hits.length === 0) {
        return iziToast.error({
            message: "Sorry, there are no images matching your search query. Please try again!",
            position: "topRight"
        });
    }
    const markup = data.hits.map(item =>
        `<li class="gallery-item">
                <a class="gallery-link" href="${item.largeImageURL}">
                    <img class="gallery-image" src="${item.webformatURL}" alt="${item.tags}">
                </a>
            <div class="gallery-info">
                <p class="card">Likes <span class="card-value">${item.likes}</span></p>
                <p class="card">Views <span class="card-value">${item.views}</span></p>
                <p class="card">Comments <span class="card-value">${item.comments}</span></p>
                <p class="card">Downloads <span class="card-value">${item.downloads}</span></p>
            </div>
        </li>`
    ).join('');

    gallery.insertAdjacentHTML('afterbegin', markup);

    let lightbox = new SimpleLightbox('.gallery-link', {
        captionsData: 'alt',
        captionDelay: 250,
    });
    lightbox.refresh()


    return markup;
}


