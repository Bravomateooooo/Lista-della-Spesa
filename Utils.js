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
