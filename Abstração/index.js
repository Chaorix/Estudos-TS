class Carro { // Entidade
    constructor(){
        this.marca = "Volkswagen" // Característica, atributo ou propriedade
        this.modelo = "Gol"
        this.cor = "prata"
        this.placa = "EMJ-2565"
    }

    ligar(){
        console.log("Carro ligado")
    }

}

const carro = new Carro() // Instância
carro.modelo = "Golf"
console.log(carro.modelo)

const carro2 = new Carro()
console.log(carro2.modelo)


// Loja virtual
class Produto {

    constructor(){

        // roupas
        this.tamanho = "M"
        this.quantidade = "10"
        this.cor = "Vermelho"
        this.preco = "45,90"

        // Eletrônicos
        this.altura = "50cm"
        this.largura = "30cm"

    }

    procurarTamanho(t) {
    if (this.tamanho == t) {
            console.log(`Encontradas ${this.quantidade} roupas do tamanho selecionado`)
        } else{
            console.log("Infelimente não temos nenhuma roupa do tamanho solicitado. Sentimos muito!")
        }
    }

}

const pedido = new Produto()
pedido.procurarTamanho("M")