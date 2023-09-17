// Função com callback
function funcaoComCallback(valor, callback) {
  setTimeout(() => {
      callback(`Função com callback: ${valor}`);
  }, 1000);
}

// Função com Promise
function funcaoComPromise(valor) {
  return new Promise((resolve, reject) => {
      setTimeout(() => {
          resolve(`Função com Promise: ${valor}`);
      }, 1500);
  });
}

// Função com async/await
async function funcaoComAsyncAwait(valor) {
  return new Promise((resolve, reject) => {
      setTimeout(() => {
          resolve(`Função com Async/Await: ${valor}`);
      }, 2000);
  });
}

// Exemplos de uso
funcaoComCallback("Primeira chamada", (resultado) => {
  document.getElementById("resultado").innerHTML += resultado + "<br>";
  
  funcaoComPromise("Segunda chamada").then((resultado) => {
      document.getElementById("resultado").innerHTML += resultado + "<br>";
      
      funcaoComAsyncAwait("Terceira chamada").then((resultado) => {
          document.getElementById("resultado").innerHTML += resultado + "<br>";
      });
  });
});

// Exemplo de uso com async/await
(async () => {
  const resultadoAsyncAwait = await funcaoComAsyncAwait("Quarta chamada");
  document.getElementById("resultado").innerHTML += resultadoAsyncAwait + "<br>";
})();
