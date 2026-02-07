

export class Computador{
    id
    status
    precoPorHora
    static #idCounter = 1

    constructor(precoPorHora = 3){
        this.id = Computador.#idCounter++
        this.status = false
        this.precoPorHora = precoPorHora
    }

    ocupar(){
        
        if(this.status == false){
            this.status = true
            return `✅ O computador ${this.id} acaba de ser ocupado`
        }
        return `❌ O computador ${this.id} já está ocupado`

    }

    liberar(){
        
        if(this.status === true){
            this.status = false
            return `✅O computador ${this.id} acaba de ser liberado`
        }
        return `❌ O computador ${this.id} já está livre`
    }

    statusComputador(){
        if(this.status === true){
            return `✅ O computador ${this.id} está ocupado`
        }
        return `❌ O computador ${this.id} está livre`
    }
}

// console.log(pcGamer.ocupar())