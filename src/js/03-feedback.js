import throttle from 'lodash.throttle';

const refs = {
    form: document.querySelector('form.feedback-form'),
    textarea: document.querySelector('form [name="message"]'),
    email: document.querySelector('form [name="email"]')
}


const STORAGE_KEY = 'feedback-form-state';
const formData = {};


refs.form.addEventListener('submit', onFormSubmit)
refs.form.addEventListener('input', throttle(onTextInput, 500))


populateTextarea()

function onFormSubmit(e) {
    e.preventDefault()

    const mail = refs.email.value
    const text = refs.textarea.value
    if(!mail  || !text) {
        alert('Type some text');
    }

    e.currentTarget.reset()
    localStorage.removeItem(STORAGE_KEY)
   
} 

function onTextInput(e) {
    formData[e.target.name] = e.target.value;
    const inputData = JSON.stringify(formData);
  
    localStorage.setItem(STORAGE_KEY, inputData);

}

function populateTextarea(e) {
    const saveMessage = localStorage.getItem(STORAGE_KEY)
    if(saveMessage) {

        const result = JSON.parse(saveMessage)

        refs.input.value = result
        refs.textarea.value = result
    }

}