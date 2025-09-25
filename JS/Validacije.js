document.getElementById("forma").addEventListener("submit", function(e) {
  e.preventDefault();

  // Polja forme
  let ime = document.getElementById("ime").value.trim();
  let email = document.getElementById("email").value.trim();
  let poruka = document.getElementById("poruka").value.trim();

  // Poruke
  let greskaPoruka = document.getElementById("greskaPoruka");
  let uspehPoruka = document.getElementById("uspehPoruka");

  greskaPoruka.textContent = "";
  uspehPoruka.textContent = "";

  // Validacija
  if (ime === "" || email === "" || poruka === "") {
    greskaPoruka.textContent = "Sva polja moraju biti popunjena!";
    return;
  }

  // Regex za email
 let emailizgled = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
 if (!email.match(emailizgled)) {
  greskaPoruka.textContent = "Unesite ispravnu Gmail adresu (nesto@gmail.com)!";
  return;
 }

  if (poruka.length < 10) {
    greskaPoruka.textContent = "Poruka mora imati najmanje 10 karaktera.";
    return;
  }

  // sve OK
  uspehPoruka.textContent = "Uspešno ste poslali poruku! ✅";

  // Reset forme
  document.getElementById("forma").reset();
});
