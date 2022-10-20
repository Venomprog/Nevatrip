"use strict";

const moreTimeBtn = document.querySelector('.voyage-add-btn');
const closeTimeBtn = document.querySelector('.voyage-close-btn');
const timeBlock = document.querySelector('.more-time');

moreTimeBtn.addEventListener('click', () =>{
    timeBlock.classList.remove('hidden-list'); //При нажатии показывает доп. время
    closeTimeBtn.classList.remove('hidden-list');
    moreTimeBtn.classList.add('hidden-list');

});
closeTimeBtn.addEventListener('click', () =>{
    timeBlock.classList.add('hidden-list'); //При нажатии убирает доп. время
    closeTimeBtn.classList.add('hidden-list');
    moreTimeBtn.classList.remove('hidden-list');
});

//Следует доработать