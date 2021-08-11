
var nombre = "Maria Leal";
var altura = 190;

var concatenacion = nombre + " " + altura;

var datos = document.getElementById("datos");
 datos.innerHTML = '<h1>Soy la caja de datos</h1><h2>Mi nombre es: '+nombre+'</h2><h3>Mido: '+altura+'cm</h3>';

 if(altura >= 190){
 	datos.innerHTML += '<h1>Eres una persona ALTA</h1>';
 }else{
 	datos.innerHTML += '<h1>Eres una persona BAJITA</h1>';
 }


for (var i = 2000; i<=2021; i++){
	// bloque de instrucciones
	datos.innerHTML += "<h2>Estamos en el año: "+i;
}