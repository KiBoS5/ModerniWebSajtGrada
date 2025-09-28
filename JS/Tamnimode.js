// Funkcija za čuvanje korisnikovog izbora teme u lokalnom skladištu
function sacuvajPreferencu(Tamni) {
    localStorage.setItem('tamni-rezim', Tamni);
  }
  
  // Funkcija za postavljanje teme na osnovu korisnikovog izbora
  function podesiTemu() {
    const Tamni = localStorage.getItem('tamni-rezim') === 'true';
    const body = document.querySelector('body');
    const popularnoNaslov = document.querySelector('.popularno h2');
    body.classList.toggle('tamni-rezim', Tamni);
    popularnoNaslov.classList.toggle('tamni-rezim', Tamni);
  }
  
  // Funkcija za promenu teme kada se klikne na dugme
  function promeniTemu() {
    const Tamni = localStorage.getItem('tamni-rezim') !== 'true';
    sacuvajPreferencu(Tamni);
    podesiTemu();
  }
  
  // Postavite temu pri učitavanju stranice
  document.addEventListener('DOMContentLoaded', podesiTemu);
  
  // Dodajte "click" događaj na dugme kako biste promenili temu
  const TamniModDugme = document.getElementById('TamniModDugme');
  TamniModDugme.addEventListener('click', promeniTemu);