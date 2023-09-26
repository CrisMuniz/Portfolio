'use strict';

// Llamamos a las clases que necesitamos para la logica del despliegue del menú
const burger = document.querySelector('.js_burger');
const list = document.querySelector('.js_links');
const contact =document.querySelector('.js_contact');
const portfolio = document.querySelector('.js_portfolio');
const aboutme = document.querySelector('.js_aboutme');

//Creamos un evento para el icono que nos permite desplegar el menu
burger.addEventListener('click', handlerClick);

//Funcion manejadora del menú
function handlerClick() {
  list.classList.toggle('open');
  burger.classList.toggle('close');

}

// Creamos los eventos de cada elemento de la lista para trabajar con ellos y las respectivas funciones manejadoras para que se esconda el menu una vez clicamos en cada elemento
contact.addEventListener('click',handlerClickContact);

function handlerClickContact() {
  list.classList.toggle('open');
  burger.classList.toggle('close');
}

portfolio.addEventListener('click', handlerClickPortfolio);

function handlerClickPortfolio() {
  list.classList.toggle('open');
  burger.classList.toggle('close');
}

aboutme.addEventListener('click', handlerClickAboutme);

function handlerClickAboutme() {
  list.classList.toggle('open');
  burger.classList.toggle('close');
}



