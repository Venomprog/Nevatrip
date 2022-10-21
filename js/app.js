"use strict";
const moreTimeBtns = document.querySelectorAll('.voyage-add-btn');
const closeTimeBtns = document.querySelectorAll('.voyage-close-btn');
const timeBlocks = document.querySelectorAll('.more-time');

function openBlock(item){
    item.classList.add('hidden-list');
    timeBlocks.forEach(item =>{
        item.classList.remove('hidden-list');
    });
}

function closeBlock(item){
    item.classList.add('hidden-list');
    timeBlocks.forEach(item =>{
        item.classList.add('hidden-list');
    });
}

moreTimeBtns.forEach(item =>{
    item.addEventListener('click', (e) => {
        openBlock(e.target);
    });
});

closeTimeBtns.forEach(item =>{
    item.addEventListener('click', (e) => {
        closeBlock(e.target);
    });
});
