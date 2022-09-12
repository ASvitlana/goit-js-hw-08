import { throttle } from 'lodash';

const form = document.querySelector('.feedback-form');
const inputedEmail = document.querySelector('input');
const inputedMessage = document.querySelector('textarea');
// console.dir(form)

form.addEventListener('input', throttle(inputedText, 500));

function inputedText() {
    const objectToSave = { email: inputedEmail.value, message: inputedMessage.value };
    localStorage.setItem('feedback-form-state', JSON.stringify(objectToSave));
};

form.addEventListener('submit', event => {
    event.preventDefault();
    console.log({ email: inputedEmail.value, message: inputedMessage.value });
    form.reset();
    localStorage.removeItem('feedback-form-state');
});

const load = key => {
    try {
        const serializedState = localStorage.getItem(key);
        return serializedState === null ? undefined : JSON.parse(serializedState);
    } catch (error) {
        console.error('Get state error: ', error.message);
    }
};

const storageData = load('feedback-form-state');
    if (storageData) {
        inputedEmail.value = storageData.email;
        inputedMessage.value = storageData.message;
}