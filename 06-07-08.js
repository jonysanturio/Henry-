/* 
  Importante: 
  No modificar ni el nombre ni los argumetos que reciben las funciones, sólo deben escribir
  código dentro de las funciones ya definidas. 
  No comentar la funcion 
*/
function crearClaseLibro() {
  class Libro {
    constructor(titulo, autor, traducciones) {
      // El constructor de la clase Libro recibe titulo (string), autor (string), traducciones (array de objetos)
      // Inicializar las propiedades del libro con los valores recibidos como argumento
      // Tu código aca:
      titulo[1]
      autor[2]
      traducciones[3]
    }

    getTitulo() {
      // este método debe retornar el titulo del libro.
      // Tu código aca:
      var titulo
        titulo = libro
      document.write (titulo)
    }

    getAutor() {
      // El método debe retornar nombre y apellido del autor
      // Tu código aca:
      var autor
        autor = nombre + apellido 
        document.write (autor)
    }

    addTraduccion(idioma, editorial) {
      // El método recibe un string 'idioma' y un string 'editorial' y debe agregar un objeto:
      // { idioma: idioma, editorial: editorial} al arreglo de traducciones del libro.
      // No debe retornar nada.
      // Tu código aca:
      const traduccion = Object.create(traducciones)
      traduccion.agregar({idiomas: 'Ingles', 'Español',});
      traduccion.agregar({editorial : 'Pre-Texto', 'Visor'}); 
    }

    getTraducciones() {
      // El método debe retornar un arreglo con sólo los idiomas del arreglo de traducciones del libro.
      // Ej:
      // Suponiendo que el libro tiene estas traducciones: [{idioma: 'inglés', editorial: 'Scholastic'}, {idioma: 'castellano', editorial: 'Santillana'}]
      // libro.getTraducciones() debería devolver ['inglés', 'castellano']
      // Tu código aca:
      const array = [traduccion];
    console.log(array.concat(idiomas));
    }

    getAlcance() {
      // El metodo debe retornar la cantidad de idiomas en la que esta traducido el libro.
      // Dato: no se repiten ni los idiomas ni las editoriales
      // ej:
      // Suponiendo que el libro tiene estas traducciones: [{idioma: 'inglés', editorial: 'Scholastic'}, {idioma: 'castellano', editorial: 'Santillana'}]
      // libro.getAlcance() deberia devolver 2
      // Tu código aca:
      const array = [traduccion];
    console.log(array.concat(i => i > 2));
    }

    }
  }

  return Libro;
}

// No modifiques nada debajo de esta linea //

module.exports = crearClaseLibro