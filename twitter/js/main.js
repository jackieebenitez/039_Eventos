/*// Create a new list item when clicking on the "Add" button
function newElement() { 
  var li = document.createElement("li"); //estoy creando un nuevo elemento con el li del html
  var inputValue = document.getElementById("myInput").value; // // estoy agarrando el valor que hay en el id myInput y lo guardo en una var
  var t = document.createTextNode(inputValue); //creo un texto, lo guardo en t y sale del valor del input
  li.appendChild(t); // el hijo de li es t
  if (inputValue === '') { // si no se ingresa nada en el input entonces te aparece un alert
    alert("Piénsalo dos veces, seguro tienes algo que hacer :D");
  } else {
    document.getElementById("myUL").appendChild(li); // busca my UL y le agrega los li
  }
  document.getElementById("myInput").value = ""; //agarra los valores de mi input

// esto se parece a lo que hay cuando creas el tache pero no es igual
  var span = document.createElement("SPAN"); //se crea el elemento SPAN
  var txt = document.createTextNode("\u00D7"); //se crea el tache
  span.className = "close"; //span tiene la clase close
  span.appendChild(txt); //el hijo de span es txt
  li.appendChild(span); //el hijo de li es span

  for (i = 0; i < close.length; i++) { //no entiendo esta línea
    close[i].onclick = function() { //cuando este en cierto i y le dan click entonces se debe quitar la
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}

// Esto crea el tache :D
var myNodelist = document.getElementsByTagName("LI"); // manda llamar todo los tag que tengan li
var i;
for (i = 0; i < myNodelist.length; i++) { // por cada li que entre debe hacer:
  var span = document.createElement("SPAN"); // Esto hace que se cree en la misma línea el tache
  var txt = document.createTextNode("\u00D7"); //Aqui usan unicode para el tache
  span.className = "close"; // se le pone una clase al span
  span.appendChild(txt); // el hijo de span es txt
  myNodelist[i].appendChild(span); // cada que cree una actividad <li> entonces se le hará un span con el unicode que se puso arriba
}


//Esto hace que se elimine el elemento cuando le piques el tache 
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

// agregar un checked para saber que ya hice una actividad
var list = document.querySelector('li');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'li') {
    ev.target.classList.toggle('checked');
  }
}, false);

//tachar la actividad*/








