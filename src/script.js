const menuOn = document.querySelector('#menu-burger');
const menuOff = document.querySelector('#menu-close');
const listContainer = document.querySelector('#list-container');
const navMenu = document.querySelector('#menu');
const overlay = document.querySelector('.overlay');


function enableNav () {

    document.body.classList.add('overflow-hidden');

    navMenu.style.display = 'block';
    menuOn.style.display = 'none';
    menuOff.style.display = 'block';
    overlay.style.display = 'block'

};

listContainer.addEventListener('click', (e) => {

    if (e.target.tagName === "LI" || e.target.closest('a')) {

        navMenu.style.display = 'none';
        overlay.style.display = 'none';
        menuOff.style.display = 'none';
        menuOn.style.display = 'block';
        document.body.classList.remove('overflow-hidden');
        
    };


});

function disbableNav () {

    document.body.classList.remove('overflow-hidden');

    navMenu.style.display = 'none';
    menuOn.style.display = 'block';
    menuOff.style.display = 'none';
    overlay.style.display = 'none'


};


function setActive (element) {

    document.querySelectorAll('.nav-link').forEach(link => link.classList.remove('active'));

    element.classList.add('active')
    
}

menuOn.addEventListener('click', enableNav);
menuOff.addEventListener('click', disbableNav);