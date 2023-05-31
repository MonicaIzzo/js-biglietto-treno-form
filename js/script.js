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
- 5 "Normalizzo" il risultato (solo 2 decimali)  
- 6 Inserisco il risultato in pagina.
*/ 



/*---------------------------------------
        OPERAZIONI PRELIMINARI
---------------------------------------*/

// # 0, 1 Recupero gli emementi dal DOM e inizializzo tutte le variabili

// FORM ELEMENTS
const InputNameSurname = document.getElementById ('InputNameSurname');
const InputKm = document.getElementById ('InputKm');
const InputAge = document.getElementById ('InputAge');
const BtnConfirm = document.getElementById ('confirm');
const BtnReset = document.getElementById ('reset');


// TICKET ELEMENTS
const ticket = document.getElementById ('ticket');

const NameSurnameElements = document.getElementById ('NameSurname');
const ticketElements = document.getElementById ('ticket');
const cabElements = document.getElementById ('cab');
const codeCPElements = document.getElementById ('codeCP');
const princeElements = document.getElementById ('prince');

// # 2 Aggancio un event listener al button
BtnConfirm.addEventListener('click', function() {
    const NameSurnameValue = InputNameSurname.value.trim();
    const KmValue = parseInt(InputKm.value);
    const AgeValue = InputAge.value;

// # 3 Validazione
if (!NameSurnameValue || isNuN(KmValue) || KmValue < 1) {
    alert('I dati inseriti non sono validi');
    return;
    };
})



