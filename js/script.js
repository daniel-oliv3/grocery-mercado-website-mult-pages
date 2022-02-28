/*Search Form/Formulario de pesquisa-btn*/
let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () => {
    searchForm.classList.toggle('active');
}


/*Shopping-cart/Carrinho de compras-btn*/
let cart = document.querySelector('.shopping-cart');

document.querySelector('#cart-btn').onclick = () => {
    cart.classList.toggle('active');
}


/*Login Form/Formulario de login-btn*/
let loginForm = document.querySelector('.login-form');

document.querySelector('#login-btn').onclick = () => {
    loginForm.classList.toggle('active');
}


/*Navbar/Barra de navegação-btn*/
let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () => {
    navbar.classList.toggle('active');
}
