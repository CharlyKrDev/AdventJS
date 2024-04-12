
/**
 * En el taller de Santa, los elfos tienen una lista de regalos que desean fabricar y un conjunto limitado de materiales.

Los regalos son cadenas de texto y los materiales son caracteres. Tu tarea es escribir una función que, dada una lista de regalos y los materiales disponibles, devuelva una lista de los regalos que se pueden fabricar.

Un regalo se puede fabricar si contamos con todos los materiales necesarios para fabricarlo.
 */
const gifts = ['tren', 'oso', 'pelota']
const materials = 'tronesa'

function manufacture(gifts, materials) {
  return gifts.filter(regalo =>{ // filtra cada uno de los elementos dentro de gifts y devuelve un array, pero como hay una 2da etapa, que es la del split, se separa cada elemento (osea las letras de las palabras que componen al regalo) y se chequea que cada una de ellas este incluida dentro de materials, en el caso que sea true, se carga en el array que devuelve filter, filter siempre devuelve un array con los elementos que cumplan la condición que se use como filtro.
    return regalo.split('').every(letra => materials.includes(letra))
  })

  
  }

function manufacture2(gifts, materials) {
  const sePuede = [];

  for (let i = 0; i < gifts.length; i++) {
    let puedeFabricarse = true; // Suponemos que el regalo puede fabricarse hasta que se demuestre lo contrario

    for (let j = 0; j < gifts[i].length; j++) {
      // Verificar si alguna letra del regalo no está en los materiales disponibles
      if (!materials.includes(gifts[i][j])) {
        puedeFabricarse = false; // Si no está, el regalo no se puede fabricar
        break; // No es necesario seguir verificando el resto de letras del regalo
      }
    }

    // Si el regalo puede fabricarse con los materiales disponibles, lo agregamos al arreglo sePuede
    if (puedeFabricarse) {
      sePuede.push(gifts[i]);
    }
  }

  return sePuede;
}

  console.log(manufacture2(gifts, materials))



  function manufacture3(gifts, materials) {
    const availableLetters = new Set(materials);
    console.log(`probando2`,availableLetters)
  
  
    return gifts.filter(regalo => {
      const regaloLetters = new Set(regalo);
      console.log(`probando`, regaloLetters)
  
      for (const letter of regaloLetters) {
        if (!availableLetters.has(letter)) {
          return false;
        }
      }
  
      return true;
    });
  }
  
  console.log(manufacture3(gifts, materials))
  
//Es Clave determinar la lógica

//Hacemos un filtro a todos los regalos
// iteramos las letras
//  chequeamos si las letras están en los materiales
//    Si no están es false
//    Si están es true.
//    si están todas las letras del regalo devolver el regalo.  



