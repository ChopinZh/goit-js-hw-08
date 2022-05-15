// Check out the documentation of the Vimeo player library.
// Add the library as a project dependency via npm.
// Initialize the player in the script file as described in the pre-existing player section, but note that you have added the player as an npm package, not via CDN.
// Read the documentation of the on() method and start tracking the timeupdate event - playback time update.
// Save playback time to local storage. Let the key for the storage be the "videoplayer-current-time" string.
// When reloading the page, use the setCurrentTime() method to resume playback from the saved position.
// Add the lodash.throttle library to the project and make sure that the playback time is updated in the storage once a second or less frequent.

import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const message = document.querySelector('.feedback-form textarea');
const email = document.querySelector('.feedback-form input');

form.addEventListener('submit', onFormSubmit);
form.addEventListener('input', throttle(onFormInput, 500));
// email.addEventListener('input', onEmailInput);

const STORAGE_KEY = "feedback-form-state";



if (localStorage.getItem(STORAGE_KEY) !== null) {
    const storage = JSON.parse(localStorage.getItem(STORAGE_KEY));
    populateTextarea(storage);
    console.log(localStorage.getItem(STORAGE_KEY));
    console.log(storage);
    }

function onFormInput(evt){
    
    if (evt.currentTarget !== null) {
        // console.log(evt.currentTarget);
        const { email, message } = evt.currentTarget;
         console.log(email, message);
        const inputElements = {
            email: email.value,
            message: message.value,
            
        }
        console.log(inputElements);
        localStorage.setItem(STORAGE_KEY, JSON.stringify(inputElements));
    }
}

function onFormSubmit(evt) {
  evt.preventDefault();
    if (message.value !== "" && email.value !== "") {
        console.log('Отправляем форму');
        evt.currentTarget.reset();
        localStorage.removeItem(STORAGE_KEY);
    } else {alert('заполните форму')}
}

function populateTextarea(savedMessageEmail) {

    email.value = savedMessageEmail.email;
    message.value = savedMessageEmail.message;
    console.log(savedMessageEmail);
  }