'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');

// Several attributes belongs to the class '.show-modal', so there is a list of show-model
const btnsOpenModal = document.querySelectorAll('.show-modal');

const openModal = function () {
    console.log('buttton clicked ');
    modal.classList.remove('hidden');// do not use the dot '.'
    overlay.classList.remove('hidden');
}

const closeModal = function () {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}

for (let i = 0; i < btnsOpenModal.length; i++) {
    btnsOpenModal[i].addEventListener('click', openModal);
}

btnCloseModal.addEventListener('click', closeModal)
overlay.addEventListener('click', closeModal)

// Listening event everywhere
// keyup: when we lift our fingers off the keyboard   keypress: fired continuously as we keep our finger on a certain key    keydown: fired as soon as we just press down the key

// Hey JS, please fire this function when a keydown event happens, and pass in the event object as an argument
// e here is basically a dictionary
document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
        closeModal();
    }
})
