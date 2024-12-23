
/**
 * Funcion para obtener cuantos puntos vale una carta
 * @param {string} carta 
 * @returns {number} Valor en puntos de la carta recibida
 */
export const valorCarta = (carta) => {

    const valor = carta.substring(0, carta.length - 1);
    return (isNaN(valor)) ?
        (valor === 'A') ? 11 : 10
        : valor * 1;
}