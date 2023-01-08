/* 
  Importante: 
  No modificar ni el nombre ni los argumetos que reciben las funciones, sólo deben escribir
  código dentro de las funciones ya definidas. 
  No comentar la funcion 
*/
function buscandoAWally(array) {
  // La función llamada 'buscandoAWally' recibe como argumento un arreglo de 'string' y debe devolver un 'string' que diga
  // 'Encontre a Wally en la posicion [indice del arreglo donde esta]'
  // Ej:
  // buscandoAWally(['Dobby', 'Harry', 'Dementor', 'Wally', 'Sirius']) debe retornar 'Encontre a Wally en la posicion 3'
  // ya que 'Wally' se encuentra en la posicion 3 del arreglo.
  // Tu código aca:
  const buscandoAWally = [Dobby: 1, Harry: 2, Wally: 3, Sirius: 4]; // 'aca se declara una lista de array en la cual se encuentra a wally
  const iswally = (elemnt) => elemnt > 3; // en este elemento encontramos el elemento wally que va recorriendo por linea hasta llegar a wally
    console.log(buscandoAWally.findIndex(iswally)); // por ultimo imprimimos sobre el array de buscandoAWally para luego ir buscando a wally con la funcion findIndex
}

// No modifiques nada debajo de esta linea //

module.exports = buscandoAWally