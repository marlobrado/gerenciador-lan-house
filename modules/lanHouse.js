import { Client } from './cliente.js';
import { Computador } from './computador.js';

export class LanHouse {
  clientes;
  computadores; // é necessário adicionar aqui também?

  constructor() {
    this.clientes = [];
    this.computadores = [];
    this.client = null;
    this.computer = null;

    this.sessions = [];
  }

  addClient(client) {
    if (client instanceof Client) {
      this.clientes.push(client);
      console.log(`✅ Cliente ${client.nome} adicionado com sucesso.`);
      return;
      // return `✅ Cliente ${client.nome} adicionado com sucesso.` porque este não funciona?
    }
    console.error(
      '❌ Erro: Os dados fornecidos não correspondem a um cliente válido.'
    );
    return; //preciso deste return?
  }
  addComputer(computer) {
    if (computer instanceof Computador) {
      this.computadores.push(computer);
      console.log(`✅ Computador ${computer.id} adicionado com sucesso.`);
      return;
    }
    console.error(
      '❌ Erro: Os dados fornecidos não correspondem a um computador válido.'
    );
    return;
  }
  initSession(client, computer, horario) {
    this.itemExist(client, 'Cliente');
    this.itemExist(computer, 'Computador');

    if(this.computer.ocupar() === false){
      console.log(`❌ O computador ${this.computer.id} já está ocupado`);
      return
    }
    this.client.initSession(horario);

    this.sessions.push([this.computer, this.client]);
    
  }
  itemExist(itemOnList, tipo) {
    let objectExist = null;
    if (tipo === 'Computador') {
      // const objectExist = this.computadores.find(item => item.id === itemOnList) aqui eu errei, tentando declarar uma const dentro de um if
      objectExist = this.computadores.find((item) => item.id === itemOnList);
    } else {
      objectExist = this.clientes.find((item) => item.nome === itemOnList);
    }

    if (objectExist === undefined) {
      console.log(`❌ Este ${tipo} não existe.`);
      return;
    }
    if (tipo === 'Computador') {
      this.computer = objectExist;
    } else {
      this.client = objectExist;
    }
  }
}
