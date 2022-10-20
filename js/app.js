"use strict";

const moreTimeBtn = document.querySelector('.voyage-add-btn');
const timeBlock = document.querySelector('.more-time');

moreTimeBtn.addEventListener('click', () =>{
    timeBlock.classList.add('hidden-list');
});