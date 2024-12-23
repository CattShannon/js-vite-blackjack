
/**
 * Funcion utilizada para sacar una carta del deck
 * @param {Array<string>} deck 
 * @returns {string} retorna la carta sacada
 */
export const pedirCarta = (deck) => {

    if (deck.length === 0) {
        throw 'No hay cartas en el deck';
    }
    const carta = deck.pop();
    return carta;
}