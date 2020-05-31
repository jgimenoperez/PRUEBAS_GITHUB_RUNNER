const fs = require('fs');


var fecha = new Date();
//var fso  = CreateObject("Scripting.FileSystemObject"); 
//var FilePointer = FileOpener.OpenTextFile("hola-mundo.txt", 2, false);
var texto =String

texto="Día: "+fecha.getDate()+"/"+(fecha.getMonth()+1)+"/"+fecha.getFullYear()
texto=texto + " Hora: "+fecha.getHours()+":"+fecha.getMinutes()+":"+fecha.getSeconds()+":"+fecha.getMilliseconds()
console.log(texto);


fs.writeFile("./holamundo.txt",texto, function (err) {
  // la funcion es la que maneja lo que sucede despues de termine el evento
  if (err) {
      return console.log(err);
  }
  // las funciones de javascript en nodejs son asincronicas
  // por lo tanto lo que se quiera hacer debe hacerse dentro de la funcion que maneja el evento
  // si uno declara una variable arriba de la funcion, la manipula dentro y la quiere usar
  // despues afuera, se corre el riezgo de que nunca se realice la manipulacion.
  console.log("The file was saved1!");
});
