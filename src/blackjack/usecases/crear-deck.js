import { shuffle } from 'underscore';

export const nombre = 'nombreDeck';//Exportacion individual

/**
 * Esta funcion crea un nuevo deck
 * @param {Array<string>} tiposDeCarta  Ejemplo: ['C', 'D', 'H', 'S']
 * @param {Array<string>} tiposEspeciales  Ejemplo: ['A', 'J', 'Q', 'K']
 * @returns {Array<string>} retorna un nuveo deck de carta con orden aleatorio
 */
const crearDeck = (tiposDeCarta, tiposEspeciales) => {

    if (!tiposDeCarta || tiposDeCarta.length === 0)
        throw new Error("tiposDeCarta es obligatorio como un arreglo de string");

    if (!tiposEspeciales || tiposEspeciales.length === 0)
        throw new Error("tiposEspeciales es obligatorio como un arreglo de string");

    let deck = [];

    for( let i = 2; i <= 10; i++ ) {
        for( let tipo of tiposDeCarta ) {
            deck.push( i + tipo);
        }
    }

    for( let tipo of tiposDeCarta ) {
        for( let esp of tiposEspeciales ) {
            deck.push( esp + tipo);
        }
    }
    // console.log( deck );
    deck = shuffle( deck );
    return deck;
}


export default crearDeck;   //exportar algo por defecto, siempre va al final del archivo, 
                            // solo se puede tener una export por defecto por archivo