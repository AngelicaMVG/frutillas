var boton = document.getElementById('boton'); // id del boton
var listaOrdenada= document.getElementById('lista');// id de la lista ordenada
var botonRemove = document.getElementById('botonRemove');

function agregarFruta(evento){
  evento.preventDefault(); // esto hace que la pagina no se refresque y no se pierda la info
  var input = document.getElementById('agregarfruta').value; // guarda el valor que el usuario agregue
  var li = document.createElement('li'); // crea <li></li>
  li.innerHTML = input; // <li> innerHTML </li>
  listaOrdenada.appendChild(li); //<ol> <li> innerHTML </li></ol>
}
boton.addEventListener('click', agregarFruta); // cuando aprietan el boton agrega la info de la fucncion agregar Fruta

function quitarFruta(){
  var item = document.getElementsByTagName('li');
  var i = item.length-1;
  listaOrdenada.removeChild([i]);
}
botonRemove.addEventListener('click', quitarFruta);
