// 3. En un laboratorio de química, los científicos tienen una lista de experimentos que desean realizar y un conjunto limitado de productos químicos disponibles. Los experimentos son cadenas de texto y los productos químicos son caracteres. Escribe una función que, dada una lista de experimentos y los productos químicos disponibles, devuelva una lista de los experimentos que se pueden realizar.
const experimentos = [
    ['reacción1', 'A', 'B', 'C'],
    ['reacción2', 'B', 'D', 'E'],
    ['reacción3', 'C', 'F', 'G']
  ];
  
  const productosQuimicosDisponibles =['A','B', 'C', 'D', 'E', 'F'];

  const laboratorio = (experimentos, productosQuimicosDisponibles) =>{
    const posible = []
    for(let i = 0; i < experimentos.length; i++ ){
        const experimento = experimentos[i].slice(1)
        for(let j = 0; j <= experimento.length; j++){
          if(experimento.every(quimico => productosQuimicosDisponibles.includes(quimico) ))

          posible.push(experimentos[i][j])


        }

    }
    return posible

  }

  console.log(laboratorio(experimentos, productosQuimicosDisponibles))


// //Otra forma similar a la anterior, pero un poco mas avanzada pq simplificamos el doble for por un for-of
//   const laboratorio3 = (experimentos, productosQuimicosDisponibles) =>{
//     const sePuedeHacer = []
//     for(const experimento of experimentos){
//         const materialesNecesarios = experimento.slice(1)

//         if(materialesNecesarios.every(material => productosQuimicosDisponibles.includes(material))){

//             sePuedeHacer.push(experimento)
//             console.log(sePuedeHacer)

//         }
//     }
//   }

  
  
//   console.log(laboratorio3 (experimentos, productosQuimicosDisponibles))
  
  
  
  // solución alternativa usando filter

//   const laboratorio2 = (experimentos, productosQuimicosDisponibles) =>{

//     return experimentos.filter(experimento => {
//         const exp = experimento.slice(1)
//         return exp.every(quimico => productosQuimicosDisponibles.includes(quimico))
//     })
//   }

//   console.log(laboratorio2(experimentos, productosQuimicosDisponibles))
