/**
 * En la fábrica de juguetes del Polo Norte, cada juguete tiene un número de identificación único.

Sin embargo, debido a un error en la máquina de juguetes, algunos números se han asignado a más de un juguete.

¡Encuentra el primer número de identificación que se ha repetido, donde la segunda ocurrencia tenga el índice más pequeño!

En otras palabras, si hay más de un número repetido, debes devolver el número cuya segunda ocurrencia aparezca primero en la lista. Si no hay números repetidos, devuelve -1.
 */


function findFirstRepeated(gifts) {
    const mapa = []
    for (const numero of gifts) {
        if (mapa.includes(numero)) return numero
        mapa.push(numero)
    }
    return -1
}
// Las siguientes son dos alternativas mas modernas a la solución, siendo la primera una alternativa sinónimo a la usada, ya que en ambas se genera una variable mapa de objeto, donde se almacena como clave el el numero del array recorrido y como valor true, y si la clave se repite pq da true la validación, la iteración se corta con el return y devuelve el numero. En el caso del set es similar, pero con la salvedad de que no se genera un objeto con clave y valor, sino que solo se cargan los valores que no se repiten y luego se validan de la misma forma. NOTA: El new Map() trabaja con clave y valor y se valida la clave mientras que new Set() solo trabaja con valor y se valida el valor.

// function findFirstRepeated(gifts) {
//     const mapa = new Map()
//     for(const numero of gifts){
//       if(mapa.has(numero)) return numero
//       mapa.set(numero, true)
//     }
//       return -1
//     }

// function findFirstRepeated(gifts) {
//     const mapa = new Set()
//     for(const numero of gifts){
//       if(mapa.has(numero)) return numero
//       mapa.add(numero)
//     }
//       return -1
//     }
