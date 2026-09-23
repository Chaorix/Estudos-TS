// Orientado a objetos
/*
const hotel = {
    quartos: 20,
    ocupados: 6,
    verificarDisponibilidade: function () {
        let res = this.quartos - this.ocupados
        console.log(`Quartos disponíveis: ${res}`)
    }
}

delete hotel.ocupados

hotel.verificarDisponibilidade()
*/

// Notação de construtor (objeto em branco)
/*
const hotel = new Object()
hotel.quartos = 20
hotel.ocupados = 10
hotel.verificarDisponibilidade = function(){
    let res = this.quartos - this.ocupados
    return "Disponíveis: " + res
}

console.log(hotel.verificarDisponibilidade())
*/

// Criando classes (mais simples)
class Hotel {
    
    constructor(){
        this.quartos = 20
        this.ocupados = 10
    }

    verificarDisponibilidade() {
        let res = this.quartos - this.ocupados
        console.log(`Disponíveis: ${res}`)
    }

}

const hotel = new Hotel()
hotel.verificarDisponibilidade()
