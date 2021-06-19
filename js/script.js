// === mobile menu ===
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mobMenu = document.getElementById('mobMenu');
const burgerBtn = document.getElementById('burgerBtn');
const cancelMenuBtn = document.getElementById('cancelBtn');


// Check broweser
function isInternetExplorer() {
    return window.navigator.userAgent.indexOf('MSIE ') > -1 || window.navigator.userAgent.indexOf('Trident/') > -1;
}

if (isInternetExplorer() === false) {
    mobileMenuBtn.addEventListener('click', () => {
        mobMenu.classList.toggle('show__mobile-menu');
        burgerBtn.classList.toggle('hide__burg-menu');
        cancelMenuBtn.classList.toggle('show__cancel-btn');
    })
} else {
    mobileMenuBtn.onclick = () => {
        mobMenu.classList.toggle('show__mobile-menu');
        burgerBtn.classList.toggle('hide__burg-menu');
        cancelMenuBtn.classList.toggle('show__cancel-btn');
    }
}
// === / mobile menu ===


// === fixed menu ===
const topMenu = document.getElementById('menu');
window.onscroll = function () {

    if (window.pageYOffset >= topMenu.offsetHeight) {
        topMenu.classList.add('sticky-menu');
        setTimeout(() => {
            topMenu.classList.add('show-sticky_menu');
        }, 100)
        
        
    } else {
        topMenu.classList.remove('sticky-menu');
        topMenu.classList.remove('show-sticky_menu');
    }
}
// === / fixed menu ===

