const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const burguerIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const cartIcon = document.querySelector('.navbar-shopping-cart');
const shoppingCart = document.querySelector('.cart-detail');


menuEmail.addEventListener('click', toggleDesktopMenu);
burguerIcon.addEventListener('click', toggleMobileMenu);
cartIcon.addEventListener('click', toggleCart);

function toggleDesktopMenu() {
    const isCartClosed = shoppingCart.classList.contains('inactive');

    if (!isCartClosed) {
        shoppingCart.classList.add('inactive');
    }
    
    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {
    const isCartClosed = shoppingCart.classList.contains('inactive');

    if (!isCartClosed) {
        shoppingCart.classList.add('inactive');
    }

    mobileMenu.classList.toggle('inactive');
}

function toggleCart() {
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    
    if (!isMobileMenuClosed) {
        mobileMenu.classList.add('inactive');
    }

    shoppingCart.classList.toggle('inactive');

}