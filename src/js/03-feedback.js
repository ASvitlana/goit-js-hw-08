import { throttle } from 'lodash';

const form = document.querySelector('.feedback-form');
const inputedEmail = document.querySelector('input');
const inputedMessage = document.querySelector('textarea');
const LOCALSTORAGE_KEY = 'feedback-form-state';
// console.dir(form)

updateOutput();

form.addEventListener('input', throttle(saveInputedText, 500));

function saveInputedText(event) {
    event.preventDefault();
    const objectToSave = { email: inputedEmail.value, message: inputedMessage.value };
    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(objectToSave));
    updateOutput();
    // form.reset();
};

form.addEventListener('submit', event => {
    event.preventDefault();
    console.log({ email: inputedEmail.value, message: inputedMessage.value });
    form.reset();
    localStorage.removeItem(LOCALSTORAGE_KEY);
});

function updateOutput() {
  output.textContent = localStorage.getItem(LOCALSTORAGE_KEY) || "";
};

const load = key => {
    try {
        const serializedState = localStorage.getItem(key);
        return serializedState === null ? undefined : JSON.parse(serializedState);
    } catch (error) {
        console.error('Get state error: ', error.message);
    }
};

const storageData = load(LOCALSTORAGE_KEY);
    if (storageData) {
        inputedEmail.value = storageData.email;
        inputedMessage.value = storageData.message;
}