
import throttle from 'lodash.throttle';


const form = document.querySelector('.feedback-form');

const LOCALSTORAGE_KEY = 'feedback-form-state';

const formData = {};

form.addEventListener('submit', onFormSubmit);
form.addEventListener('input', throttle(onTextInput, 500));

populateInputedText();

function onTextInput(event) {
    formData[event.target.name] = event.target.value;
    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(formData));
};

function onFormSubmit(event) {
    event.preventDefault();
    
    console.log(JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY)));
    event.target.reset();
    localStorage.removeItem(LOCALSTORAGE_KEY);
};

function populateInputedText() {
    let savedMessages = localStorage.getItem(LOCALSTORAGE_KEY);

    if(savedMessages) {
        savedMessages = JSON.parse(savedMessages);
        Object.entries(savedMessages).forEach(([name, value]) => {
            form.elements[name].value = value;
        })
    }
}



