// 2. En una cocina, los chefs tienen una lista de recetas que desean preparar y un conjunto limitado de ingredientes disponibles. Las recetas son cadenas de texto y los ingredientes son caracteres. Escribe una función que, dada una lista de recetas y los ingredientes disponibles, devuelva una lista de las recetas que se pueden preparar.
// Ejercicio 2: Cocina
const recetas = [
    ['ensalada', 'lechuga', 'tomate', 'zanahoria'],
    ['sopa', 'cebolla', 'zanahoria', 'papa'],
    ['tarta', 'masa', 'queso', 'cebolla']
  ];
  
  const ingredientesDisponibles = ['lechuga', 'tomate', 'zanahoria', 'cebolla', 'masa', 'queso'];
  

  const receta = (recetas, ingredientesDisponibles) =>{

   return recetas.filter(receta =>{
        const recetaPosibles = receta.slice(1)
        return recetaPosibles.every(ingredientes => ingredientesDisponibles.includes(ingredientes) )
    })


  }

  console.log(receta(recetas, ingredientesDisponibles))