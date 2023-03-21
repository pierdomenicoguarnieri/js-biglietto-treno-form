# Biglietto Treno

## Consegna

Scrivere un programma che chieda all’utente:
1. Il numero di chilometri da percorrere

2. Età del passeggero

Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:

1. Il prezzo del biglietto è definito in base ai km (0.21 € al km)

2. Va applicato uno sconto del 20% per i minorenni

3. Va applicato uno sconto del 40% per gli over 65.

**MILESTONE 1:**

Iniziamo implementando il programma senza alcuna estetica: usando esclusivamente due input e un bottone (non stilizzati), realizziamo le specifiche scritte sopra. La risposta finale (o *output*) sarà anch’essa da scrivere in console.

**MILESTONE 2:**

*Solo una volta che il milestone 1 sarà completo e funzionante.* 

Realizzeremo un form in pagina in cui l’utente potrà inserire i dati e visualizzare il calcolo finale con il prezzo.
Il recap dei dati e l’output del prezzo finale, andranno quindi stampati in pagina (il prezzo dovrà essere formattato con massimo due decimali, per indicare i centesimi sul prezzo). Questo richiederà un minimo di ricerca.

## Steps

Steps da seguire:

1. **Tramite un input** chiedere all'utente di **inserire il nome e cognome** e **salvarli**

2. **Tramite un input** chiedere all'utente di **inserire il numero di chilometri** che vuole percorrere e **salvarli**

3. **Tramite un input** chiedere all'utente di **inserire la propria età** e **salvarla**

4. **Calcolare**, utilizzando il numero di chilometri inseriti dall'utente, **il prezzo del biglietto** tenendo conto che il costo del **sigolo chilometro è pari a 0.21€**

5. **Tramite un input type selector chiedere all'utente di selezionare la fascia d'età**

    - Nel caso in cui appartenga alla fascia d'età **"Minorenne"** applicare uno **sconto del 20%** al totale del costo del biglietto calcolato in precedenza.

    - Nel caso in cui appartenga alla fascia d'età **"Maggiorenne"** non applicare **alcuno sconto** al totale del costo del biglietto calcolato in precedenza.
    
    - Nel caso in cui appartenga alla fascia d'età **"Over 65"** applicare uno **sconto del 40%** al totale del costo del biglietto calcolato in precedenza.

6. **Stampare** a schermo **il costo finale del biglietto con massimo due decimali.**

## Extra



## References

