"use scrict";

/**
 * @author: Facciorusso Matteo
 * @description: Array globale che contiene gli elementi della lista della spesa.
 * @type {string[]}
 */
const listaDellaSpesa=[];

/**
 * @function aggiungiElemento
 * @description Aggiunge un elemento alla lista se non è già presente.
 * @param {string} elemento - L'elemento da aggiungere.
 * @returns {void} - Non restituisce nulla.
 */
function aggiungiElemento(elemento)
{
    const presente=listaDellaSpesa.includes(elemento);

    if(presente===false)
    {
        listaDellaSpesa.push(elemento);
        console.log(`Aggiunto l'elemento: ${elemento}`);
    }
    else
    {
        console.log(`L'elemento ${elemento} è già presente nella lista.`);
    }
}

/**
 * @function rimuoviElemento
 * @description Rimuove un elemento dalla liste se presente.
 * @param {string} elemento - L'elemento da rimuovere. 
 * @returns {void} - Non restituisce nulla.
 */
function rimuoviElemento(elemento)
{
    const indice=listaDellaSpesa.indexOf(elemento);
    const trovato=indice!==-1;
    
    if(trovato===true)
    {
        listaDellaSpesa.splice(indice,1);
        console.log(`L'elemento ${elemento} è stato rimosso.`);
    }
    else
    {
        console.log(`L'elemento ${elemento} non è stato trovato. `);
    }
}

function mostraLista()
{
    console.log("\n Lista della Spesa: ");

    const listaVuota=listaDellaSpesa.length===0;

    if(listaVuota===true)
    {
        console.log(" (vuota)");
    }
    else
    {
        listaDellaSpesa.forEach((elemento, indice)=>
        {
            console.log(`${indice+1}.${elemento}`);
        });
    }
}

function ordinaLista()
{
    listaDellaSpesa.sort();
    console.log("Lista della spesa ordinata!");
}

function cercaElemento(testo)
{
    for (let i=0;i<listaDellaSpesa.length;i++)
    {
        const elemento=listaDellaSpesa[i];
        if (elemento.toLowerCase().includes(testo.toLowerCase()))
        {
            console.log(`Elemento trovato: ${elemento}`);
            return; 
        }
    }
    console.log(`Nessun elemento trovato per ${testo}.`);
  }
  
  module.exports={aggiungiElemento, rimuoviElemento, mostraLista, ordinaLista,cercaElemento};
  