import './style.css';
import createHome from './home.js';
import createContact from './contact.js';
import createMenu from './menu.js';


// UI pointers

const homeLinkUI = document.querySelector('#home-link');
const menuLinkUI = document.querySelector('#menu-link');
const contactLinkUI = document.querySelector('#contact-link');
const contentUI = document.querySelector('#content');

// Event handlers

function loadHome() {
  
  clearContent();

  contentUI.appendChild(createHome());

};

function loadContact() {
  
  clearContent();

  contentUI.appendChild(createContact());

  // let buttonUI = contentUI.querySelector('#send-button');
  // buttonUI.addEventListener('click', (e) => {
  //   e.preventDefault();
  // });


};

function loadMenu() {
  
  clearContent();

  contentUI.appendChild(createMenu());

};

// Other functions

function clearContent() {

  contentUI.innerHTML = null;

}

// Event listeners
document.addEventListener('DOMContentLoaded', loadHome);
homeLinkUI.addEventListener('click', loadHome);
menuLinkUI.addEventListener('click', loadMenu);
contactLinkUI.addEventListener('click', loadContact);

