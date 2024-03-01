
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
    const value = input.value.trim()

    if (value === '') {
        form.reset()
        return iziToast.error({
            message: 'Enter search image name',
            position: "topRight"
        });

    }


    loader.classList.remove('visually-hidden')


    getData(value)
        .then(data => createMarkup(data))
        .catch(error => console.log(error));


    loader.classList.add('visually-hidden')
    form.reset()
};

