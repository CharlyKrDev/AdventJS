// ¡Por supuesto! Aquí tienes 10 ejercicios similares al caso que proporcionaste:

// 1. En un taller de manualidades, los estudiantes tienen una lista de proyectos que desean crear y un conjunto limitado de herramientas disponibles. Los proyectos son cadenas de texto y las herramientas son caracteres. Escribe una función que, dada una lista de proyectos y las herramientas disponibles, devuelva una lista de los proyectos que se pueden realizar.

const proyectos = [
    ['tarjeta', 'pintura', 'pegamento'],
    ['collar', 'cuentas', 'hilo'],
    ['muñeco', 'tela', 'aguja'],
    ['marco', 'cartón', 'tijeras']
  ];
  
  const herramientasDisponibles = new Set(['pintura', 'pegamento', 'hilo', 'aguja', 'tijeras']);
  
  function proyectosRealizables(proyectos, herramientasDisponibles) {
    proyectos.filter(proyecto => {
        return proyecto[0]

    })
    // Escribe tu código aquí
  }

// 2. En una cocina, los chefs tienen una lista de recetas que desean preparar y un conjunto limitado de ingredientes disponibles. Las recetas son cadenas de texto y los ingredientes son caracteres. Escribe una función que, dada una lista de recetas y los ingredientes disponibles, devuelva una lista de las recetas que se pueden preparar.
// Ejercicio 2: Cocina
const recetas = [
    ['ensalada', 'lechuga', 'tomate', 'zanahoria'],
    ['sopa', 'cebolla', 'zanahoria', 'papa'],
    ['tarta', 'masa', 'queso', 'cebolla']
  ];
  
  const ingredientesDisponibles = new Set(['lechuga', 'tomate', 'zanahoria', 'cebolla', 'papa', 'masa', 'queso']);
  
  function recetasPreparables(recetas, ingredientesDisponibles) {
    // Escribe tu código aquí
  }
  
// 3. En un laboratorio de química, los científicos tienen una lista de experimentos que desean realizar y un conjunto limitado de productos químicos disponibles. Los experimentos son cadenas de texto y los productos químicos son caracteres. Escribe una función que, dada una lista de experimentos y los productos químicos disponibles, devuelva una lista de los experimentos que se pueden realizar.
const experimentos = [
    ['reacción1', 'A', 'B', 'C'],
    ['reacción2', 'B', 'D', 'E'],
    ['reacción3', 'C', 'F', 'G']
  ];
  
  const productosQuimicosDisponibles = new Set(['A', 'B', 'C', 'D', 'E', 'F', 'G']);
  
// 4. En un estudio de arte, los artistas tienen una lista de obras de arte que desean crear y un conjunto limitado de materiales disponibles. Las obras de arte son cadenas de texto y los materiales son caracteres. Escribe una función que, dada una lista de obras de arte y los materiales disponibles, devuelva una lista de las obras de arte que se pueden crear.
const obrasDeArte = [
    ['pintura1', 'lienzo', 'pinceles', 'colores'],
    ['escultura1', 'arcilla', 'cincel', 'modelado'],
    ['grabado1', 'bloque', 'cúter', 'tinta']
  ];
  
  const materialesDisponibles = new Set(['lienzo', 'pinceles', 'colores', 'arcilla', 'cincel', 'modelado', 'bloque', 'cúter', 'tinta']);
  
// 5. En un taller de carpintería, los carpinteros tienen una lista de muebles que desean construir y un conjunto limitado de herramientas disponibles. Los muebles son cadenas de texto y las herramientas son caracteres. Escribe una función que, dada una lista de muebles y las herramientas disponibles, devuelva una lista de los muebles que se pueden construir.
const muebles = [
    ['mesa', 'madera', 'sierra', 'martillo'],
    ['silla', 'madera', 'clavos', 'lijadora'],
    ['estante', 'madera', 'taladro', 'tornillos']
  ];
  
  const herramientasDisponibles1 = new Set(['madera', 'sierra', 'martillo', 'clavos', 'lijadora', 'taladro', 'tornillos']);
  
// 6. En un taller de costura, los modistas tienen una lista de prendas de vestir que desean confeccionar y un conjunto limitado de telas disponibles. Las prendas de vestir son cadenas de texto y las telas son caracteres. Escribe una función que, dada una lista de prendas de vestir y las telas disponibles, devuelva una lista de las prendas de vestir que se pueden confeccionar.
const prendasDeVestir = [
    ['vestido', 'algodón', 'aguja', 'hilo'],
    ['pantalón', 'denim', 'tijeras', 'cremallera'],
    ['camisa', 'seda', 'botones', 'entretela']
  ];
  
  const telasDisponibles = new Set(['algodón', 'denim', 'seda']);
  
// 7. En un laboratorio de biología, los biólogos tienen una lista de organismos que desean estudiar y un conjunto limitado de reactivos disponibles. Los organismos son cadenas de texto y los reactivos son caracteres. Escribe una función que, dada una lista de organismos y los reactivos disponibles, devuelva una lista de los organismos que se pueden estudiar.
const organismos = [
    ['bacteria1', 'agar', 'tinción', 'microscopio'],
    ['planta1', 'tierra', 'agua', 'luces'],
    ['animal1', 'suero', 'microscopio', 'disecador']
  ];
  
  const reactivosDisponibles = new Set(['agar', 'tinción', 'microscopio', 'tierra', 'agua', 'luces', 'suero', 'disecador']);
  
// 8. En una fábrica de automóviles, los ingenieros tienen una lista de modelos de automóviles que desean fabricar y un conjunto limitado de piezas disponibles. Los modelos de automóviles son cadenas de texto y las piezas son caracteres. Escribe una función que, dada una lista de modelos de automóviles y las piezas disponibles, devuelva una lista de los modelos que se pueden fabricar.
const modelosDeAutomoviles = [
    ['sedán', 'motor', 'carrocería', 'ruedas'],
    ['camioneta', 'motor', 'carrocería', 'ruedas', 'tracción'],
    ['coupé', 'motor', 'carrocería', 'ruedas', 'asientos']
  ];
  
  const piezasDisponibles = new Set(['motor', 'carrocería', 'ruedas', 'tracción', 'asientos']);
  
// 9. En un taller de joyería, los joyeros tienen una lista de joyas que desean crear y un conjunto limitado de materiales preciosos disponibles. Las joyas son cadenas de texto y los materiales preciosos son caracteres. Escribe una función que, dada una lista de joyas y los materiales preciosos disponibles, devuelva una lista de las joyas que se pueden crear.
const joyas = [
    ['anillo', 'oro', 'diamante', 'esmalte'],
    ['collar', 'plata', 'perlas', 'cierre'],
    ['pendientes', 'oro', 'rubí', 'ganchos']
  ];
  
  const materialesPreciososDisponibles = new Set(['oro', 'plata', 'diamante', 'perlas', 'rubí']);
  
// 10. En un estudio de diseño gráfico, los diseñadores tienen una lista de diseños que desean crear y un conjunto limitado de herramientas de diseño disponibles. Los diseños son cadenas de texto y las herramientas de diseño son caracteres. Escribe una función que, dada una lista de diseños y las herramientas de diseño disponibles, devuelva una lista de los diseños que se pueden crear.
const diseños = [
    ['logotipo', 'ordenador', 'software', 'tableta gráfica'],
    ['afiche', 'ordenador', 'software', 'impresora'],
    ['folleto', 'ordenador', 'software', 'impresora']
  ];
  
  const herramientasDisponibles2 = new Set(['ordenador', 'software', 'tableta gráfica', 'impresora']);
  

// ¡Espero que estos ejercicios te ayuden a practicar! Si necesitas más información sobre alguno en particular, ¡no dudes en preguntar!