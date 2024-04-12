const proyectos = [
    ['tarjeta', 'pintura', 'pegamento'],
    ['collar', 'cuentas', 'hilo'],
    ['muñeco', 'tela', 'aguja'],
    ['marco', 'cartón', 'tijeras']
];
const herramientasDisponibles = new Set(['pintura', 'pegamento', 'hilo', 'aguja', 'tijeras', 'cuentas']);

//   function proyectosRealizables(proyectos, herramientasDisponibles) {
//     return proyectos.filter(proyecto => {
//       const herramientasProyecto = proyecto.slice(1); // Obtiene los elementos después del nombre del proyecto
//       console.log(herramientasProyecto)
//       return herramientasProyecto.every(herramienta => herramientasDisponibles.has(herramienta));
//     });
//   }
//   console.log(proyectosRealizables(proyectos, herramientasDisponibles))

const herramientasDisponibles2 = ['pintura', 'pegamento', 'hilo', 'aguja', 'tijeras', 'cuentas'];


  function proyectosRealizablesAlt2(proyectos, herramientasDisponibles2) {
    return proyectos.filter(proyecto => {
      const herramientasProyecto = proyecto.slice(1); // Obtiene los elementos después del nombre del proyecto
     console.log(herramientasProyecto)

      return herramientasProyecto.every(herramienta => herramientasDisponibles2.includes(herramienta));
    });
  }

  console.log(proyectosRealizablesAlt2(proyectos, herramientasDisponibles2))
