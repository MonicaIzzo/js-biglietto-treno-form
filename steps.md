# Calcolo del prezzo del biglietto del treno.

Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L'output del prezzo finale va messo fuori con massimo due decimali, per indicare centesimi sul prezzo. Questo richiederà un minimo di ricerca.

MILESTONE 1:
Iniziamo implementando il programma senza alcuna estetica: usando esclusivamente due input e un bottone (non stilizzati), realizziamo le specifiche scritte sopra. La risposta finale (o output) sarà anch’essa da scrivere in console.

MILESTONE 2:
Solo una volta che il milestone 1 sarà completo e funzionante allora realizzeremo un form (non tag <form>) in pagina in cui l’utente potrà inserire i dati e visualizzare il calcolo finale con il prezzo.
Il recap dei dati e l'output del prezzo finale, andranno quindi stampati in pagina (il prezzo dovrà essere formattato con massimo due decimali, per indicare i centesimi sul prezzo).

<br>
<br>

- **0** - Recupero gli elementi dal DOM che ci occorrono per l'esecuzione del programma.
- **1** Prepararo tutte le variabili/costanti (const) e le variabili (intese come contenitori - let) utili per la parte di calcolo del costo del biglietto finale.
- **2** - Preparo um form per recuperare dall'utente tramite i km che vuole percorrere e memorizzo il dato in una variaible precedentemente predisposta.
- **4** - Inserisco nel form anche il campo input text per richiedere all'utente la sua età. Salvo anche questo dato in una variabile precedentemente dichiarata.
- **5** Eseguo la validazione dei dati inseriti dall'tente.
  **SE I DATI FORNITI NON SON VALIDI:**
  Uscire dal flusso del programma ed invito l'utente a ri-inserire i dati in un formato corretto.
  **SE I DATI INSERITI SONO CORRETTI:**
  Procedo con l'esecuzione del programma al prossimo step.

- **6** Calcolo il prezzo del biglietto al lordo degli sconti.
  - Memorizzo il dato in una variabile di comodo.
- **SE L'UTENTE HA DIRITTO A UNO SCONTO PROCEDO CON IL CALCOLO DELLO STESSO**
  - **SE l'utente ha diritto allo sconto young**
  - Applico lo sconto young al prezzo lordo.
  - **SE l'utente ha diritto allo sconto over**
  - Applico lo sconto over al prezzo lordo.
  - **SE l'utente non ha diritto allo sconto**
  - Non eseguo nessun calcolo e passo direttamente allo step successivo.
- **7** "Normalizzo il prezzo" tramite il comendo JS .fixed
- **8** Stampo il risultato in pagina
  **FINE**
