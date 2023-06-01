console.log('JS OK')

/* 
- 0 Recupero l'elemento da DOM
- 1 Inizializzo tutte le variabili
- 2 Aggancio un event listener al button di conferma
- 3 Verifico che i dati inseriti dall'utente
    - SE NON CORRETTI: alert con messaggio ed esco dal programma
    - SE CORRETTI: procedo al punto successivo
- 4 Calcolo il prezzo del biglietto al lordo degli sconti.
    - SE l'età dell'utente è minore di 18 anni applico lo sconto young.
    - SE l'età dell'utente è maggiore di 65 anni applico lo sconto over.
    - SE l'utente non ha diritto a nessun effettuo nessun sconto e procedo al punto successivo.
- 5 Randomizzo Carrozza e code CP 
- 6 Inserisco il risultato in pagina.
*/ 



/*---------------------------------------
        OPERAZIONI PRELIMINARI
---------------------------------------*/

// # 0, 1 Recupero gli emementi dal DOM e inizializzo tutte le variabili

// FORM ELEMENTS
const NameSurnameInput = document.getElementById ('NameSurname');
const KmInput = document.getElementById ('Km');
const AgeInput = document.getElementById ('Age');
const ConfirmBtn = document.getElementById ('confirm');
const ResetBtn = document.getElementById ('reset');


// TICKET ELEMENTS
const ticketCardeElements = document.getElementById ('ticketCard');
const PassengerElements = document.getElementById ('passenger');
const ticketElements = document.getElementById ('ticket');
const cabElements = document.getElementById ('cab');
const codeCPElements = document.getElementById ('codeCP');
const priceElements = document.getElementById ('price');


const princePerKm = 0.21;
const minDiscount = 0.8;
const overDiscount = 0.6;

console.log('princePerKm', 'minDiscount', 'overDiscount')

// # 2 Aggancio un event listener al button
ConfirmBtn.addEventListener('click', function() {
    const NameSurnameValue = NameSurnameInput.value.trim();
    const KmValue = parseInt(KmInput.value);
    const AgeValue = AgeInput.value;

    console.log('NameSurnameValue', 'KmValue', 'AgeValue')

// # 3 Validazione
if (!NameSurnameValue || isNuN(KmValue) || KmValue < 1) {
    alert('I dati inseriti non sono validi');
    return;
}

// # 4 Calcolo il prezzo del biglietto
let price = KmValue * 0.21;
let discount = 'Tariffa standard';

// # 4a 4b Calcolo gli eventuali sconti
if (AgeValue === 'min') {
    price *= 0.8;
    discount = 'Tariffa ridotta';

}
else if (AgeValue === 'over') {
    price *= 0.6;
    discount = 'Tariffa ridotta';
}    

// Carrozza
const cab = Math.floor(Math.random() * 12 + 1);

// codePC
const codePC = Math.floor(Math.random * (00000 - 99999) + 99999);


// # 6 Inserisco il risultato in pagina.

PassengerElements.innerText = NameSurnameValue;
ticketElements.innerText = ticketValue;
cabElements.innerText = cab;
codeCPElements.innerText = codePC;
priceElements.innerText = '€' + priceValue.toFixed(2);


ticketElements.classList.remove('d-none')

})

ConfirmBtn.addEventListener('click', function() {
});

ResetBtn.addEventListener('click', function() {
    NameSurnameInput.Value = '';
    KmInput.Value = '';
    AgeInput.Value = '';
    ticketElements.classList.add('d-none');
});



