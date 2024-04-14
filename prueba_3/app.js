// En el taller de Santa, un elfo travieso ha estado jugando en la cadena de fabricación de regalos, añadiendo o eliminando un paso no planificado.

// Tienes la secuencia original de pasos en la fabricación original y la secuencia modificada modified que puede incluir un paso extra o faltar un paso.

// Tu tarea es escribir una función que identifique y devuelva el primer paso extra que se ha añadido o eliminado en la cadena de fabricación. Si no hay ninguna diferencia entre las secuencias, devuelve una cadena vacía.
//solución
function findNaughtyStep(original, modified) {
const Loriginal = original.length
const Lmodified = modified.length
if(Loriginal === Lmodified) return ''

const count = Math.max(Loriginal, Lmodified) // 1) se obtiene la cantidad de caracteres de la cadena mas larga.
    for(let i = 0; i < count; i++){ // 2) se itera cada elemento --> continua paso en 3
        if(original[i] !== modified[i]) return Lmodified > Loriginal   // 3) comparo que el valor en cada posición y si hay diferencia, dependiendo de que elemento sea el mas grande se devuelve ese elemento en la posición que genero la diferencia
        ? modified[i] 
        : original[i]
    }

  }



/**
 * Lógica:
 * 1) Obtener el numero de caracteres de la cadena mas larga
 *    2)  itero cada crater y chequeo si el indice actual del original es igual al del modificado.
 *         3) si sobra un carácter devuelvo el modificado
 *          si falta el carácter devuelvo el original
 *  
 * 
 */