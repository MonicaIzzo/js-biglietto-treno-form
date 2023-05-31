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

- **0**
  - Recupero gli elementi dal DOM che ci occorrono per l'esecuzione del programma.
- **1**
  - Prepararo tutte le variabili che servono per eseguire il programma.
- **2**
  - Chiedo all'utente tramite il form i km che vuole percorrere.
   - salvare il dato in una variabile.
- **4**
  - Chiedo all'utente tramite il form la sua èta.
   - salvare il dato in una variabile.
- **4**
  - Verificare che i dati inseriti dall'utente sono corretti per l'esecuzione del programma
  **SE NO**
  Uscire dal flusso del programma ed invitare l'utente a ri-inserire i dati corretti.
  **SE SI**
  Procedere al punto successivo

- **5**
  - Calcolare il prezzo del biglietto al lordo degli sconti.
   - salvare il dato in una variabile.
- **SE**
  - l'utente ha diritto a sconti (young o over)?
      - **SE l'utente ha diritto allo sconto young**
      - Applicare lo sconto young al prezzo lordo.
      - **SE l'utente ha diritto allo sconto over**
      - Applicare lo sconto over al prezzo lordo.
      - **SE l'utente non ha diritto allo sconto**
      - Non eseguire nessun calcolo e passare direttamente al punto successivo.
- **6**
  - "Normalizzare" tramite il comendo JS .fixed il risultato (solo 2 decimali)  
- **7**
  - Stampare il risultato in pagina 
**FINE**  




