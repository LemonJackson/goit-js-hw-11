
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";


import { getData } from './js/pixabay-api.js';
import { createMarkup } from './js/render-functions.js';

const form = document.querySelector(".form");
const input = document.querySelector(".form-input");
const gallery = document.querySelector('.gallery');
const loader = document.querySelector('.loader');



form.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();

    loader.classList.remove('visually-hidden')

    const value = input.value.trim().toLowerCase().replaceAll(" ", "+")

    if (value.length === 0) {
        return iziToast.error({
            message: 'Enter search image name',
            position: "topRight"
        });
    }

    getData(value)
        .then(data => createMarkup(data))


    loader.classList.add('visually-hidden')
    form.reset()
};

