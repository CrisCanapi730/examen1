
export function prepararFrase(frase)
{
    let fraseaux = frase.split(" ");
    return fraseaux;
}

export function probarPalabras(frase)
{
    for(let i = 0; i<frase.length; i++)
    {
        if(frase.toLowerCase() === frase.toUpperCase())
        {
            return true;
        }
        else{
            return false;
        }
    }
}