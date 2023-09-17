// Criando objetos literais
const pessoa1 = {
    nome: "Alice",
    idade: 30,
  };
  
  const pessoa2 = {
    nome: "Bob",
    idade: 25,
  };

  const pessoa3 = {
    nome: "Rodolfo",
    idade: 23,
  };

  const pessoa4 = {
    nome: "Pablo",
    idade: 24,
  };

  const pessoa5 = {
    nome: "Paulo",
    idade: 26,
  };
  
  // Criando objetos com construtores
  function Animal(nome, tipo) {
    this.nome = nome;
    this.tipo = tipo;
  }
  
  const animal1 = new Animal("Zoe", "Cachorro");
  const animal2 = new Animal("Laila", "Cachorro");
  const animal3 = new Animal("Nina", "Girafa");
  
  // Percorrendo objetos e fazendo impressões
  console.log("Dados pessoa 1:", pessoa1.nome + " " + pessoa1.idade + " " + "anos");
  console.log("Dados pessoa 2:", pessoa2.nome + " " + pessoa2.idade + " " + "anos");
  console.log("Dados pessoa 3:", pessoa3.nome + " " + pessoa3.idade + " " + "anos");
  console.log("Dados pessoa 4:", pessoa4.nome + " " + pessoa1.idade + " " + "anos");
  console.log("Dados pessoa 5:", pessoa5.nome + " " + pessoa5.idade + " " + "anos");
  
  console.log("Nome do animal 1:", animal1.nome);
  console.log("Tipo do animal 2:", animal2.tipo);
  