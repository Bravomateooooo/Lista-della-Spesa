"use scrict";

const prompt=require("prompt-sync")();

const {aggiungiElemento, rimuoviElemento, mostraLista, ordinaLista, cercaElemento}=require("./Utils.js");

let continua=true;

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
            const aggiungi=prompt("Inserisci l'elemento da aggiungere: ");
            aggiungiElemento(aggiungi);
            break;

        case "2":
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