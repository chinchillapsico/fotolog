function agregaPosteo() {
	/*Saves data of the commenting user*/

var containerPosteos = document.getElementById("contenedor-posteos");
var nombreFF= document.getElementById("nombre").value;
var contenidoFF=document.getElementById("cajaposteos").value;

 /* Node element where the comment will go */
var nuevoPost= document.createElement("div");

/*Elements that will save the post*/
var contenedorNombre= document.createElement("strong");
var contenedorPost=document.createElement("p");
var separacion= document.createElement("hr");

/*create element for heart*/
var parrafCorazon=document.createElement("p");
var i=document.createElement("i");

/*We give a father the heart icon */
parrafCorazon.appendChild(i);

/*We give attributes to the heart*/
parrafCorazon.setAttribute("class","corazon");
i.setAttribute("class", "fa fa-heart");
i.setAttribute("arial-hidden", "true");

/*We will transform it to text node*/
var nodoNombre = document.createTextNode(nombreFF + " escribió:");
var nodoPosteo = document.createTextNode(contenidoFF);

/*We give  fathers to created nodes and "nombre", "contenido"*/
contenedorNombre.appendChild(nodoNombre);
contenedorPost.appendChild(nodoPosteo);

nuevoPost.appendChild(contenedorNombre);
nuevoPost.appendChild(contenedorPost);
nuevoPost.appendChild(parrafCorazon);
nuevoPost.appendChild(separacion);
 /*we create a function for heart and give it red class (css)
 addEventListener() is a method that adds a listener
 .toggle() If the element has the class it is removed otherwise it is added*/
i.addEventListener("click", function(){
	i.classList.toggle("rojo");
});

/*We give attributes to new post and we add to container*/
nuevoPost.setAttribute("class", "posteo");
containerPosteos.appendChild(nuevoPost);

/*To reset fields and leave them empty again*/
document.getElementById("nombre").value = "";
document.getElementById("cajaposteos").value ="";

}