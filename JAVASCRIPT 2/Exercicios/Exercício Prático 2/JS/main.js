// Definindo a classe Animal
class Animal {
    constructor(nome, idade) {
      this.nome = nome;
      this.idade = idade;
    }
  
    fazerBarulho() {
      console.log(this.nome + " " + "faz um som.");
    }
  }
  
  // Definindo a classe Mamífero que herda de Animal
  class Mamifero extends Animal {
    constructor(nome, idade, tipoDePelagem) {
      super(nome, idade);
      this.tipoDePelagem = tipoDePelagem;
    }
  
    amamentar() {
      console.log(this.nome + " " + "está amamentando.");
    }
  }
  
  // Definindo a classe Ave que herda de Animal
  class Ave extends Animal {
    constructor(nome, idade, tipoDeBico) {
      super(nome, idade);
      this.tipoDeBico = tipoDeBico;
    }
  
    voar() {
      console.log(this.nome + " " + "não está voando.");
    }
  }
  
  // Definindo a classe Cachorro que herda de Mamífero
  class Cachorro extends Mamifero {
    constructor(nome, idade, raca) {
      super(nome, idade, 'Pelagem de pelo');
      this.raca = raca;
    }
  
    latir() {
      console.log(this.nome + " " +  "está latindo.");
    }
  
    static infoEspecie() {
      console.log('Os cachorros são mamíferos domesticados.');
    }
  }
  
  // Definindo a classe Pinguim que herda de Ave
  class Pinguim extends Ave {
    constructor(nome, idade) {
      super(nome, idade, 'Bico de Pinguim');
    }
  
    nadar() {
      console.log(this.nome + " " + "está nadando.");
    }
  }
  
  // Criando instâncias das classes
  const cachorro = new Cachorro('Laila', 2, 'Pastor Alemão');
  const pinguim = new Pinguim('Pingo', 5);
  
  // Usando métodos das classes
  cachorro.fazerBarulho();
  cachorro.amamentar();
  cachorro.latir();
  
  pinguim.fazerBarulho();
  pinguim.voar();
  pinguim.nadar();
  
  // Usando método estático da classe Cachorro
  Cachorro.infoEspecie();


  