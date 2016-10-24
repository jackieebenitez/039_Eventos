function strike (){
  console.log(strike)
  var strike = this.parentElement;
  if (this.checked) {                  
     strike.style.textDecoration= "line-through";
  }
 else{                                  
    strike.style.textDecoration= "none";
 }
}

function todoList() {
  var li = document.createElement("li"); // crear un li
  li.className = "list-group-item"; // quitar los dots al li 
  var input = document.createElement("input"); // crear un input con el valor:
  input.type="checkbox"; //checkbox
  var inputValue = document.getElementById("task").value; //se toma el valor de task y lo convierto en:
  var texto = document.createTextNode(inputValue); //texto
  li.appendChild(input); 
  li.appendChild(texto);
//lo que sigue es la alerta por si el usuario no escribe nada en el textarea
  if (inputValue === '') {
    alert("¿Estás seguro que no harás nada hoy?");
  } else {
    document.getElementById("list").appendChild(li);
  }
  document.getElementById("task").value = "";

// creo el span para el bote de basura. qué hacer cuando se pica el bote y
//tachar el texto
  var span = document.createElement("SPAN");
  span.className = "glyphicon glyphicon-trash pull-right";
  li.appendChild(span);
//cuando le piquen al bote de basura
  span.onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  } //y ahora wuuuujuuuuuuuuuu ya pude tacharlo yeiiii
  input.addEventListener("click", strike);
}



/*function get_todos() {
    var todos = new Array;
    var todos_str = localStorage.getItem('todo');
    if (todos_str !== null) {
        todos = JSON.parse(todos_str); 
    }
    return todos;
}
 
function add() {
    var task = document.getElementById('task').value;
 
    var todos = get_todos();
    todos.push(task);
    localStorage.setItem('todo', JSON.stringify(todos));
 
    show();
 
    return false;
}
 
function remove() {
    var id = this.getAttribute('id');
    var todos = get_todos();
    todos.splice(id, 1);
    localStorage.setItem('todo', JSON.stringify(todos));
 
    show();
 
    return false;
}
 
function show() {
    var todos = get_todos();
 
    var html = '<ul>';
    for(var i=0; i<todos.length; i++) {
        html += '<li>' + todos[i] + '<button class="remove" id="' + i  + '">x</button></li>';
    };
    html += '</ul>';
 
    document.getElementById('todos').innerHTML = html;
 
    var buttons = document.getElementsByClassName('remove');
    for (var i=0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', remove);
    };
}
 
document.getElementById('add').addEventListener('click', add);
show();
 Create a new list item when clicking on the "Add" button
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
}, false);*/








