"use scrict";

/**
 * @author: Facciorusso Matteo.
 * @description: Script principale per gestire la lista della spesa da terminale.
 */
const prompt=require("prompt-sync")();

const {aggiungiElemento, rimuoviElemento, mostraLista, ordinaLista, cercaElemento}=require("./Utils.js");

/**
 * @type {boolean}
 * @description Controlla se il programma deve continuare ad eseguire il ciclo principale.
 */
let continua=true;

/**
 * @description Ciclo principale che mostra il menu e gestisce le scelte dell'utente.
 */
while(continua)
{
    console.log("\n--- Gestione Lista della Spesa ---");
    console.log("1. Aggiungi elemento");
    console.log("2. Rimuovi elemento");
    console.log("3. Mostra lista");
    console.log("4. Ordina lista");
    console.log("5. Cerca elemento");
    console.log("6. Esci"); 

    const scelta=prompt("Scegli un'opzione: ");

    switch(scelta)
    {
        case "1":
            /**
             * @type {string}
             * @description Elemento da aggiungere alla lista.
             */
            const aggiungi=prompt("Inserisci l'elemento da aggiungere: ");
            aggiungiElemento(aggiungi);
            break;

        case "2":
            /**
             * @type {string}
             * @description Elemento da rimuovere dalla lista.
             */
            const rimuovi=prompt("Inserisci l'elemento da rimuovere: ");
            rimuoviElemento(rimuovi);
            break;
            
        case "3":
            mostraLista();
            break;
           
        case "4":
            ordinaLista();
            break;
           
        case "5":
            /**
             * @type {string}
             * @description Testo da cercare nella lista.
             */
            const cerca=prompt("Inserisci il testo da cercare: ");
            cercaElemento(cerca);
            break;
            
        case "6":
            continua=false;
            console.log("Uscita...");
            break;
            
        default:
            console.log("Opzione non valida, riprova.");

    }
}