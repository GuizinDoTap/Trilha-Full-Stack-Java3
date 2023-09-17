setTimeout(function() {myFunction("Mensagem !!!");}, 3000);

function myFunction(value){
    document.getElementById("demo").innerHTML = value;
}