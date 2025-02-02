/* Tee puhelinluettelo.
Puhelinluetteloon lisäät taulukkoon objekteja (eli henkilöitä joilla nimi ja puhelinnumero).
Käyttäjältä kysytään henkilön nimi ja puhelinnumero.
Henkilön poisto -toimintoa ei tarvitse tässä versiossa olla.

Tee hakutoiminto jossa haet nimen perusteella puhelinnumeron.

Tee puhelinnumeron haku funktioksi.
Funktion parametrina on taulukko josta haetaan ja henkilön nimi.
Funktio palauttaa puhelinnumeron.
Kutsu funktiota.

Käyttöliittymän voit tehdä millaiseksi haluat (komentokehoite -pohjainen kuitenkin) */

const input = require("readline-sync");
// alustetaan puhelinluettelo
const phoneBook = [];

// Metodi puhelinnumeron etsimiseen henkilön nimellä.
function FindPhoneNumber(phoneBook, firstName) {
  const findNum = phoneBook.find(
    (person) => person.firstName.toLowerCase() === firstName.toLowerCase()
  );
  if (findNum) {
    return findNum.phoneNumber;
  } else {
    return "\n Numeroa ei löytynyt.";
  }
}
// Metodi henkilön lisäämiseen puhelinluetteloon
function AddPerson() {
  while (true) {
    const name = input.question("Anna nimi: (Enter = lopeta) ");
    if (name === "") break;
    const number = input.question("Anna puhelinnumero: ");
    let person = { firstName: name, phoneNumber: number };
    phoneBook.push(person);
    console.log("Henkilö lisätty puhelinluetteloon.");
  }
}
// Metodi jossa pyydetään etsittävän henkilön nimeä
function AskForSearch() {
  while (true) {
    const name = input.question("Kenen puhelinnumeroa etsitään? ");
    if (name === "") break;
    console.log("Puhelinnumero: ", FindPhoneNumber(phoneBook, name));
  }
}

AddPerson();
AskForSearch();
