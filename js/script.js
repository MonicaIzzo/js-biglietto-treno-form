console.log("JS OK");

/* 
- 0 Recupero gli elementi dal DOM
- 1 Inizializzo tutte le variabili
- 2 Aggancio un event listener al button di conferma
- 3 Verifico i dati inseriti dall'utente
    - SE NON CORRETTI: alert con messaggio di errore ed esco dal programma
    - SE CORRETTI: procedo allo step successivo
- 4 Calcolo il prezzo del biglietto al lordo degli sconti.
    - SE l'età dell'utente è minore di 18 anni applico lo sconto young.
    - SE l'età dell'utente è maggiore di 65 anni applico lo sconto over.
    - SE l'utente non ha diritto a nessun sconto, procedo allo steps successivo.
- 5 Randomizzo Carrozza e code CP 
- 6 Inserisco il risultato in pagina.
*/

/*---------------------------------------
        OPERAZIONI PRELIMINARI
---------------------------------------*/

// # 0, 1 Recupero gli emementi dal DOM e inizializzo tutte le variabili

// FORM ELEMENTS
const nameField = document.getElementById("name");
const kmsField = document.getElementById("kms");
const ageField = document.getElementById("age");
const confirmButton = document.getElementById("confirm-button");
const resetButton = document.getElementById("reset-button");

// TICKET ELEMENTS
const ticketSection = document.getElementById("ticket-section");
const passengerElements = document.getElementById("passenger");
const rateElements = document.getElementById("rate");
const cabElements = document.getElementById("cab");
const pnrlements = document.getElementById("pnr");
const priceElements = document.getElementById("price");

const priceperKms = 0.21;
const minDiscount = 0.8;
const overDiscount = 0.6;

// # 2 Aggancio un event listener al button
confirmButton.addEventListener("click", function () {
  const nameValue = nameField.value.trim();
  const kmsValue = parseInt(kmsField.value);
  const ageValue = ageField.value;

  // # 3 Validazione
  if (!nameValue || isNaN(kmsValue) || kmsValue < 1) {
    alert(
      "I dati inseriti non sono validi. Riprova a inserrire i dati richiesti"
    );
    return;
  }

  // # 4 Calcolo il prezzo del biglietto
  let price = kmsValue * priceperKms;
  let rateName = "Tariffa Standard";

  // # 4a 4b Calcolo gli eventuali sconti
  if (ageValue === "min") {
    price *= minDiscount;
    rateName = "Tariffa ridotta";
  } else if (ageValue === "over") {
    price *= overDiscount;
    rateName = "Tariffa ridotta";
  }

  // Carrozza
  const cab = Math.floor(Math.random() * 12) + 1;
  // codePC
  const pnr = Math.floor(Math.random() * (100000 - 90000) + 90000);

  // # 6 Inserisco il risultato in pagina.
  passengerElements.innerText = nameValue;
  rateElements.innerText = rateName;
  cabElements.innerText = cab;
  pnrlements.innerText = pnr;
  priceElements.innerText = "€" + price.toFixed(2);

  ticketSection.classList.remove("d-none");
});

resetButton.addEventListener("click", function () {
  nameField.Value = "";
  kmsField.Value = "";
  ageField.Value = "";
  ticketSection.classList.add("d-none");
});
