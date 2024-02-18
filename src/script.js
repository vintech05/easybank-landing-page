const menuOn = document.querySelector('#menu-burger');
const menuOff = document.querySelector('#menu-close');
const navMenu = document.querySelector('#menu');


function enableNav () {

    navMenu.style.display = 'block';
    menuOn.style.display = 'none';
    menuOff.style.display = 'block';

}

function disbableNav () {

    navMenu.style.display = 'none';
    menuOn.style.display = 'block';
    menuOff.style.display = 'none';

}

menuOn.addEventListener('click', enableNav);
menuOff.addEventListener('click', disbableNav);