
let brSlajda = 1;
let slajdTajmer; // čuva referencu na tajmer

prikazSlajda(brSlajda);

// strelice
function sledeciSlajd(n) {
  prikazSlajda(brSlajda += n);
  resetTajmera();
}

// tačkice
function trenutniSlajd(n) {
  prikazSlajda(brSlajda = n);
  resetTajmera();
}

function prikazSlajda(n) {
  let i;
  let slajdovi = document.getElementsByClassName("galerija-slajd");
  let tacke = document.getElementsByClassName("galerija-tacka");
  
  if (n > slajdovi.length) { brSlajda = 1 }
  if (n < 1) { brSlajda = slajdovi.length }
  
  for (i = 0; i < slajdovi.length; i++) {
    slajdovi[i].style.display = "none";
    slajdovi[i].classList.remove("active");
  }
  for (i = 0; i < tacke.length; i++) {
    tacke[i].classList.remove("active");
  }
  
  slajdovi[brSlajda-1].style.display = "block";
  slajdovi[brSlajda-1].classList.add("active");
  tacke[brSlajda-1].classList.add("active");
}

// automatsko menjanje slajda
function automatskoMenjanje() {
  brSlajda++;
  prikazSlajda(brSlajda);
}

// resetovanje tajmera kad korisnik ručno menja slajd
function resetTajmera() {
  clearInterval(slajdTajmer);
  slajdTajmer = setInterval(automatskoMenjanje, 6000);
}

// pokretanje tajmera na početku
resetTajmera();
