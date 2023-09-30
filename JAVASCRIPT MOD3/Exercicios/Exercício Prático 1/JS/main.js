// Extrair conteúdos de tags
var paragrafo = document.getElementById('paragrafo').textContent;
var div1 = document.getElementById('div1').textContent;
var listaItems = document.querySelectorAll('#lista li');
var link = document.getElementById('link').textContent;
var inputTexto = document.getElementById('inputTexto').value;

console.log("Conteúdos extraídos:");
console.log("Parágrafo: " + paragrafo);
console.log("Div: " + div1);
console.log("Itens da lista:");
listaItems.forEach(function(item) {
    console.log(item.textContent);
});
console.log("Link: " + link);
console.log("Valor do Input: " + inputTexto);

// Aplicar conteúdo em tags com INNER HTML
document.getElementById('paragrafo').innerHTML = "<strong>Os Minions são adoráveis e engraçados personagens amarelos que conquistaram o coração de pessoas de todas as idades ao redor do mundo. Eles são criaturas fictícias que apareceram pela primeira vez no filme Meu Malvado Favorito e se tornaram um fenômeno cultural por conta própria.Os Minions são conhecidos por sua aparência peculiar, com olhos grandes, óculos redondos, macacões azuis e uma língua própria que mistura várias línguas e sons engraçados. Eles são liderados por Gru, o vilão com um bom coração que eventualmente se torna um herói.Essas pequenas criaturas amarelas são conhecidas por suas travessuras, confusões hilariantes e uma profunda devoção ao seu mestre, Gru. Eles estão sempre em busca de aventuras e, apesar de suas trapalhadas, sempre acabam fazendo o que é certo no final. Os Minions se comunicam de maneira única e divertida, o que os torna ainda mais cativantes. Eles são adorados por sua natureza inocente e pela maneira como celebram a amizade e a lealdade. Com sua alegria contagiante, os Minions são uma lembrança de que a felicidade pode ser encontrada nas coisas mais simples da vida.</strong>";
document.getElementById('div1').innerHTML = "Novo <em>conteúdo</em> na div.";
document.getElementById('link').innerHTML = "Novo <strong>Link</strong>";

// Validador de formulário simples
document.getElementById('botao1').addEventListener('click', function() {
    var valorInput = document.getElementById('inputTexto').value;
    if (valorInput.trim() === "") {
        alert("Por favor, preencha o campo de texto.");
    } else {
        alert("Texto digitado: " + valorInput);
    }
});

// Evento para limpar o campo de texto
document.getElementById('botao2').addEventListener('click', function() {
    document.getElementById('inputTexto').value = "";
});