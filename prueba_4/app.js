/**
 * En el taller de Santa 🎅, algunos mensajes navideños han sido escritos de manera peculiar: las letras dentro de los paréntesis deben ser leídas al revés

Santa necesita que estos mensajes estén correctamente formateados. Tu tarea es escribir una función que tome una cadena de texto y revierta los caracteres dentro de cada par de paréntesis, eliminando los paréntesis en el mensaje final.

Eso sí, ten en cuenta que pueden existir paréntesis anidados, por lo que debes invertir los caracteres en el orden correcto.
 */
//Solución
function decode(message) {
    let result = message;
    let match;

    while ((match = result.match(/\(([^()]+)\)/))) {
        const sanitized = match[1].split('').reverse().join('');
        result = result.replace(match[0], sanitized);
    }

    return result;
}


/**solución alternativa, es básicamente lo mismo, pero la recursividad de la función que se generar en la segunda solución en la primera lo genera el while, lo que hace que la función tenga mejores practicas.
 * 
 * DATO a tener en cuenta, dentro de las expresiones regulares, algunas tienen grupo de captura interno, esto significa que en la posición  0 guarda el valor original de la coincidencia y la posición 1 el valor sin la coincidencia. En el ejercicio en la 1era iteración match[0] devolvería  "(cla)" mientras que en match[1] "cla"
 * 
 */

function decode(message) {
    const match = message.match(/\(([^()]+)\)/) // dentro de match hay esta regexp (expresiones regulares) (/\([^()]+)\)/) es una forma de validar/verificar si se cumple una condición y match es un método que se usa para buscar dentro de un string una coincidencia, y devuelve un array con esa coincidencia
    console.log(match)
    if (!match) return message
    const sanitized = match[1].split('').reverse().join('')
    const result = message.replace(match[0], sanitized)
    return decode(result)
}

decode('sa(u(cla)atn)s')

/**Lógica
 * 
 */