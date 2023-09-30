/* 
const element = document.getElementById("intro");
document.getElementById("demo").innerHTML = "TEXTO: " + element.innerHTML;


const element2 = document.getElementsByTagName("p");
document.getElementById("demo2").innerHTML = "TEXTO: " + element2[2].innerHTML; 
*/

const x = document.getElementById("main");
const y = x.getElementsByTagName("p");

document.getElementById("demo").innerHTML = "Textos: " + y[0].innerHTML;
