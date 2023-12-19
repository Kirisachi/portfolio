//Smooth Scroll
let Scrollbar = window.Scrollbar;

Scrollbar.init(document.querySelector('html'));

//Splash Screen
const splash = document.querySelector(".splash")

document.addEventListener('DOMContentLoaded', (e)=>{
    setTimeout(()=>{
        splash.classList.add('display-none')
    }, 2000);
})