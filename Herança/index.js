// Herança - Reutilização 

class Animal {//Superclasse
    constructor(cor, tamanho, peso) {
        this.cor = cor
        this.tamanho = tamanho
        this.peso = peso
    }

    correr() {
        console.log("correr como")
    }

    dormir() {
        console.log("dormir")
    }
}

class Cao extends Animal {//Subclasse / Filha
    constructor(cor, tamanho, peso, tOrelha) {
        super(cor, tamanho, peso) // Utilizado para trazer todos os atributos e métodos da classe-pai
        this.tamanhoOrelha = tOrelha
    }

    correr() {
        super.correr() // Chama o método correr da superclasse
        console.log("um cão")
    }

    latir() {
        console.log("latir")
    }
}

class Passaro extends Animal {//Subclasse / Filha
    constructor(cor, tamanho, peso) {
        super(cor, tamanho, peso)
        this.sabeFalar = true
    }

    voar() {
        console.log("voar")
    }

    correr() {
        super.correr()
        console.log("um pássaro")
    }
}

class Papagaio extends Passaro {//Subclasse da subclasse / Neta
    constructor(cor, tamanho, peso){
        super(cor, tamanho, peso)
        this.sabeFalar = true
    }
    falar() {
        console.log("Loro quer biscoito")
    }
}

// Instancia
// const animal = new Animal("Preto", 10, 100)
// console.log(animal)

const cao = new Cao("rosa", 5, 1, 100)
// cao.tamanhoOrelha = 10
console.log(cao)
// cao.correr()

// const passaro = new Passaro()
// passaro.correr()
// const papagaio = new Papagaio()

// console.log(cao)
// console.log(passaro)
// papagaio.falar()