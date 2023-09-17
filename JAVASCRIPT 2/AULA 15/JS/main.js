function myFunction(){
    return Promise.resolve("Hello!");
}

async function myFunction(){
    return "hello!";
}

async function myDisplay(){
    let myPromise = new Promise(function(resolve, reject){
        resolve("Mensagem!!!");
    });
    document.getElementById("demo").innerHTML = await myPromise;
}

myDisplay();