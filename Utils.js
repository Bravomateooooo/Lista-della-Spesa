"use scrict";

const listaDellaSpesa=[];

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

