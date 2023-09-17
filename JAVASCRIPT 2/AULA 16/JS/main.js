function myFunction1() {
    const inpObj = document.getElementById("id1");
    if (!inpObj.checkValidity()){
        document.getElementById("demo").innerHTML = inpObj.validationMessage;
    }else{
        document.getElementById("demo").innerHTML = "Input Ok !!!"
    }
}

function myFunction2(){
    let text;
    if (document.getElementById("id2").validity.rangeUnderflow){
        text = "Valor muito pequeno!"; 
    }else{
        text = "Input OK!!"
    }
    document.getElementById("demo2").innerHTML = text;
}