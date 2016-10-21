function crearBoton() {
    var para = document.createElement("INPUT"); //Crear un input
    para.className = "move-input"
    var guardar = document.createElement("BUTTON"); //Crear un botón con el input
    guardar.className = "btn btn-primary"

    guardar.onclick = function(){ //cuando le pique a guardar... 
    	console.log(para.value);
    	var div = document.createElement("DIV");//se crea un elemento div
    	var txDiv = para.value; //guardando lo que hay en el input en una var
    	var titulo = document.createTextNode(txDiv) //se convierte en texto el txDiv de arriba
    	div.appendChild(titulo); //se junta el div (papá) con el (título)
    	//Hasta aqui se crea el título del DIV (En Trello es el título principal)
    	var tarjeta = document.createElement("BUTTON"); //Ahora vamos a crear un btn para agregar divs (tarjetas)
    	tarjeta.className = "btn btn-primary" //Le doy una clase a la tarjeta en este caso estoy usando las clases de Bootstrap

    	tarjeta.onclick = function (){ //Cuando le des click en Guardar debe hacer lo siguiente:
    		//console.log(div.value); //me sirve para checar si está guardando lo que quiero escribir
    		var inputTarjeta = document.createElement("INPUT") //al click se crea un input
    		var guardarTarjeta = document.createElement("BUTTON"); //con ese input tmbn va un botón
    		guardarTarjeta.className = "btn btn-primary" //el botón tiene estas clases
    		var textoBtnTarjeta = document.createTextNode("Guardar tarjeta") //Aqui se crea un texto que despues voy a pegar al btn que cree
    		guardarTarjeta.appendChild(textoBtnTarjeta); //aqui pego el texto a boton

    		guardarTarjeta.onclick = function(){
    			var inputGuardarTarjeta = document.createElement
    		}
    		var tDiv = document.createElement("DIV");
    		var textoDiv = inputTarjeta.value;
    		var tarjetaTarea = document.createTextNode(textoDiv);
    		div.appendChild(tDiv);
    	}
    	var btn = document.createTextNode("Agregar tarjeta"); //creo un texto que posteriormente voy a poner dentro de "tarjeta"
    	tarjeta.appendChild(btn); //tarjeta es un botón que llevará el texto de btn
    	div.appendChild(tarjeta); //aqui le estoy diciendo que el div contenga al botón tarjeta que ya tiene dentro "Agregar tarjeta"
    	document.body.appendChild(div);//le estoy diciendo que pegue en el documento todo lo que le dije arriba
    }
    var t = document.createTextNode("Guardar"); //crear un texto que diga guardar
    guardar.appendChild(t); // ponerle guardar al btn
    document.getElementById("myDIV").appendChild(para); // donde esta myDiv se crea el input
    document.getElementById("myDIV").appendChild(guardar); //donde esta myDiv se crea el btn
}



