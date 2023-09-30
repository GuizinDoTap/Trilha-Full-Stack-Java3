function validateForm(){
    let x = document.forms["myForm"]["fname"].value;
    if (x == "") {
        alert("Campo deve ser preenchio!");
        return false;
    }
}