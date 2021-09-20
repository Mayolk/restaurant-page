import './style.css';
import createHome from './home.js';
// import HeroImage from './marcel-heil-unsplash.jpg';



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

  function clearContent() {

    contentUI.innerHTML = null;

  }


  // Event listeners
  document.addEventListener('DOMContentLoaded', loadHome);
  homeLinkUI.addEventListener('click', loadHome);
  // menuLinkUI.addEventListener('click', loadMenu);
  // contactLinkUI.addEventListener('click', loadContact);

