
import throttle from 'lodash.throttle';


const refs = {
    form: document.querySelector('.feedback-form'),
    inputedEmail: document.querySelector('input'),
    inputedMessage: document.querySelector('textarea'),
};

const LOCALSTORAGE_KEY = 'feedback-form-state';

const formData = {};

refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', throttle(onTextInput, 500));

populateInputedText();

function onTextInput(event) {
    // const formData = { email: refs.inputedEmail.value, message: refs.inputedMessage.value };
    formData[event.target.name] = event.target.value;
    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(formData));
};

function onFormSubmit(event) {
    event.preventDefault();
    console.log(JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY)));
    event.target.reset();
    localStorage.removeItem(LOCALSTORAGE_KEY);
};

function populateInputedText(event) {
    const savedMessages = localStorage.getItem(LOCALSTORAGE_KEY);

    if(savedMessages) {
        formData[event.target.name] = event.target.value;
    }
}