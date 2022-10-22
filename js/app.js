"use strict";
const moreTimeBtns = document.querySelectorAll('.voyage-add-btn');
const closeTimeBtns = document.querySelectorAll('.voyage-close-btn');
const timeBlocks = document.querySelectorAll('.more-time');

function openBlock(item, num){
    item.classList.add('hidden-list');
    timeBlocks[num].classList.remove('hidden-list');
    closeTimeBtns[num].classList.remove('hidden-list');
}

function closeBlock(item, num){
    item.classList.add('hidden-list');
    timeBlocks[num].classList.add('hidden-list');
    moreTimeBtns[num].classList.remove('hidden-list');
}

moreTimeBtns.forEach(item =>{
    item.addEventListener('click', (e) => {
        const num = e.target.id;  //получение айдишника с цели клика
        openBlock(e.target, num); //передача номера айди и самой цели клика
    });
});

closeTimeBtns.forEach(item =>{
    item.addEventListener('click', (e) => {
        const num = e.target.id;
        closeBlock(e.target, num);
    });
});

//all works correctly