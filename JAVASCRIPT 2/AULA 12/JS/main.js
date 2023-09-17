function myDisplayer(some) {
    document.getElementById("demo").innerHTML = some;
}

function myCalculator(num1, num2){
    let sum = num1 + num2;
    return sum;
}

let result = myCalculator(5, 5);
myDisplayer(result);


function myDisplayer2(something) {
    document.getElementById("demo").innerHTML = something;
}

function myCalculator2(num1, num2, myCallback){
    let sum2 = num1 = num2;
    myCallback(sum2);
}

myCalculator2(5, 5, myDisplayer2);