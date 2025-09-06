
document.addEventListener('DOMContentLoaded', function() {
let menu = document.getElementById('menu-section');
let services = document.getElementById('services-section');
let products = document.getElementById('products-section');
let contact = document.getElementById('contact-section');
    let menuLink = document.getElementById('li-menu');
    let servicesLink = document.getElementById('li-services');
    let productsLink = document.getElementById('li-products');
    let contactLink = document.getElementById('li-contact');
    function hideAllSections() {
    menu.style.display = 'none';
    services.style.display = 'none';
    products.style.display = 'none';
    contact.style.display = 'none';
    }
    function showSection(a) {
    a.style.display = 'block';
    }
    hideAllSections();
    showSection(menu);
    menuLink.addEventListener("click", function() {
        hideAllSections();
        showSection(menu);
        console.log("click en menu");
    });
    servicesLink.addEventListener("click", function() {
        hideAllSections();
        showSection(services);
        console.log("click en servicios");
    });
    productsLink.addEventListener("click", function() {
        hideAllSections();
        showSection(products);
        console.log("click en productos");
    });
    contactLink.addEventListener("click", function() {
        hideAllSections();
        showSection(contact);
        console.log("click en contacto");
    });    
});