export class Computador {
  id;
  status;
  precoPorHora;
  static #idCounter = 1;

  constructor(precoPorHora = 3) {
    this.id = Computador.#idCounter++;
    this.status = false;
    this.precoPorHora = precoPorHora;
  }

  ocupar() {
    if (this.status == false) {
      this.status = true;
      console.log(`✅ O computador ${this.id} acaba de ser ocupado`)
      return true
    }
    return false //erro
  }

  liberar() {
    if (this.status === true) {
      this.status = false;
      console.log(`✅O computador ${this.id} acaba de ser liberado`)
      return `✅O computador ${this.id} acaba de ser liberado`; //erro
    }
    console.log(`❌ O computador ${this.id} já está livre`)
    return `❌ O computador ${this.id} já está livre`; //erro
  }

  statusComputador() {
    if (this.status === true) {
      console.log(`✅ O computador ${this.id} está ocupado`)
      return `✅ O computador ${this.id} está ocupado`; //erro
    }
    console.log(`❌ O computador ${this.id} está livre`)
    return `❌ O computador ${this.id} está livre`; //erro
  }
}

// console.log(pcGamer.ocupar())
