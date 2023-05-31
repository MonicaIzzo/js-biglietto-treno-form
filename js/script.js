console.log('JS OK')

/* 
- 0 Recupero l'elemento da DOM
- 1 Inizializzo tutte le variabili
- 2 Chiedere all'utente tramite il prompt i km che vuole percorrere.
- 3 Chiedere all'utente tramite il prompt la sua età.
- 4 Calcolare il prezzo del biglietto al lordo degli sconti.
- 5 Stabilire se l'utente ha diritto a sconti (young o over).
    5a SE l'età dell'utente è minore di 18 anni applico lo sconto young.
    5b SE l'età dell'utente è maggiore di 65 anni applico lo sconto over.
- 6 "Normalizzare" il risultato (solo 2 decimali)  
- 7 Stampare il risultato in pagina   
*/ 



/*---------------------------------------
        OPERAZIONI PRELIMINARI
---------------------------------------*/

// # 0
const PrinceDiscounted = document.getElementById ('prince-discounted');

// # 1
const discountYoung = 20; // variabile sconto giovani
const discountOver = 40;  // variabile sconto anziani
let grossPrice;    // prezzo biglietto lordo

let totalPrince;    // prezzo finale

let rounded;
let discount;


/*---------------------------------------
        MAIN LOGIC
---------------------------------------*/

// # 2
const KMtoTravel = parseInt(prompt('Quanti km vuoi percorrere?').trim());
console.log(KMtoTravel);

// # 3
const youAge = parseInt(prompt('Quanti anni hai?').trim());
console.log(youAge);


/*  VALIDAZIONE */
if (isNaN(KMtoTravel) || (isNaN(youAge)) || youAge <= 0 ||  KMtoTravel <= 0) {
    alert('Hai inserito valori non validi. Prego riprovare');
    console.log('Hai inserito valori non validi. Prego riprovare');
}
else {
        // # 4
    grossPrice =  KMtoTravel * 0.21;
    console.log(typeof grossPrice);

    // # 5 # 6
    // nessun sconto
    if (youAge >= 18 && youAge <= 65)
        {
            totalPrince = grossPrice;
            console.log(totalPrince);
            discount = 0;
         document.getElementById ('prince-table').innerHTML = 
    
    `
    <p class="intro"">Ciao, in base alle tue preferenze di viaggio (${KMtoTravel}Km da percorrere) e età anagrafica inserita: (${youAge }) anni,<br>
    Siamo lieti di proporle la nostra miglior proposta.</p>
    <hr>
    <p class="total-prince"> Costo del biglietto: ${grossPrice} €<p>
    `;
        
        }  
    // sconto young
    else if (youAge <= 65)
        {
            totalPrince = grossPrice - ((grossPrice / 100) * 20);
            totalPrince = Math.round((totalPrince + Number.EPSILON) * 100) / 100;
            console.log(totalPrince);
            discount = 20;
            document.getElementById ('prince-table').innerHTML = 
    
    `
    <p class="intro"">Ciao, in base alle tue preferenze di viaggio (${KMtoTravel}Km da percorrere) e età anagrafica inserita: (${youAge }) anni,<br>
    Siamo lieti di proporle la nostra miglior proposta.</p>
    <hr>
    <p class="prince">Prezzo del biglietto: ${grossPrice} €<p>
    <p class="discount"> Sconto applicato: ${discount}%</p>
    <hr>
    <p class="total-prince"> Totale da pagare: ${totalPrince} €<p>
    `;
        }
    // sconto over
    else if  (youAge  >= 18)
        {
            totalPrince = grossPrice - ((grossPrice / 100) * 40);
            totalPrince = Math.round((totalPrince + Number.EPSILON) * 100) / 100;
            console.log(totalPrince);
            discount = 40;
    document.getElementById ('prince-table').innerHTML = 
    
    `
    <p class="intro"">Ciao, in base alle tue preferenze di viaggio (${KMtoTravel}Km da percorrere) e età anagrafica inserita: (${youAge }) anni,<br>
    Siamo lieti di proporle la nostra miglior proposta.</p>
    <hr>
    <p class="prince">Prezzo del biglietto: ${grossPrice} €<p>
    <p class="discount"> Sconto applicato: ${discount}%</p>
    <hr>
    <p class="total-prince"> Totale da pagare: ${totalPrince} €<p>
    `;        
    }
}

// # 7




