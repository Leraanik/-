const menuBtn = document.querySelector('.menu_btn')
const menu = document.querySelector('.menu__list')

menuBtn.addEventListener('click', ()=>{
    menu.classList.toggle('menu__active');
})