const burgerDugme = document.getElementById('burgerDugme');
const navigacija = document.getElementById('navigacija');

burgerDugme.addEventListener('click', () => {
    navigacija.classList.toggle('active');
});

const meni = document.getElementById('meni');
const padajuciKontent = document.querySelector('.padajuci-kontent');

if (meni && padajuciKontent) {
    meni.addEventListener('click', function(e) {
        e.preventDefault();
        if (window.innerWidth <= 800) {
            padajuciKontent.classList.toggle('otvori');
        }
    });
}