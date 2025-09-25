// Selektuj dugmad
const veceDugme = document.getElementById('VeciFont');
const manjeDugme = document.getElementById('ManjiFont');
const body = document.body;

// Podrazumevana i granicne vrednosti
const minfont = 12;
const maxfont = 32;
const pocetnifont = 16;

// Učitaj iz localStorage ili podesi podrazumevanu vrednost
function dajVelicinuFonta() {
    const sacuvano = localStorage.getItem('fontSize');
    return sacuvano ? parseInt(sacuvano, 10) : pocetnifont;
}

// Postavi veličinu fonta na body i sačuvaj u localStorage
function postaviVelicinuFonta(velicina) {
    body.style.fontSize = velicina + 'px';
     document.querySelectorAll('p').forEach(p => {
        p.style.fontSize = velicina + 'px';
    });
    localStorage.setItem('fontSize', velicina);
}

// Inicijalizacija na učitavanju stranice
document.addEventListener('DOMContentLoaded', () => {
    postaviVelicinuFonta(dajVelicinuFonta());
});

// Povećaj font
veceDugme.addEventListener('click', () => {
    let trenutno = dajVelicinuFonta();
    if (trenutno < maxfont) {
        postaviVelicinuFonta(trenutno + 2);
    }
});

// Smanji font
manjeDugme.addEventListener('click', () => {
    let trenutno = dajVelicinuFonta();
    if (trenutno > minfont) {
        postaviVelicinuFonta(trenutno - 2);
    }
});