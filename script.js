'use strict';

let btnShow = document.querySelector('.btnShow');
let Modal = document.querySelector('.Modal');
let btnClose = document.querySelector('.btnClose');
let overlay = document.querySelector('.overlay');


//Show Modal function
function showModal(){
    Modal.classList.remove('hidden');
    overlay.classList.remove('hidden')
}
//Close Modal function
const closeModal = function(){
    Modal.classList.add('hidden');
    overlay.classList.add('hidden')
}


btnShow.addEventListener('click',showModal)
btnClose.addEventListener('click',closeModal)
overlay.addEventListener('click',closeModal)


document.addEventListener("keydown",function(e){
    if(e.key === 'Escape' && !Modal.classList.contains('hidden')){
        closeModal()
    }
})