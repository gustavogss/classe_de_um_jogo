// Utilizado para entrada de dados
const input = require('readline-sync');

class Heroi {

    ataque = "";

    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar() {

        if (this.tipo === "mago") {
            this.ataque = "magia";

        } else if (this.tipo === "guerreiro") {
            this.ataque = "espada";

        } else if (this.tipo === "monge") {
            this.ataque = "artes marciais";

        } else if (this.tipo === "ninja") {
            this.ataque = "shuriken";
            
        } else {
            this.tipo = `- ${this.tipo} - é um tipo de ataque`;
            this.ataque = "Ataque inválido";
        }

        // Saída -> ataque
        console.log(`O ${this.tipo} atacou usando ${this.ataque}`)
    }
}


do {

    let nome = input.question('Informe do heroi: ');
    let idade = input.questionInt('Informe a idade do heroi: ');
    let tipo = input.question('Informe o tipo heroi [mago, guerreiro, monge ou ninja]: ');

    let heroi = new Heroi(nome, idade, tipo.toLowerCase()); // 
    heroi.atacar(); 


    let sair = input.question('Deseja criar um novo heroi? [s/n] ');

    if(sair.toLowerCase() === 'n')
        break;

} while(true);