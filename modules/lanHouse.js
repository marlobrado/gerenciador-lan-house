import { Client } from './cliente.js';
import { Computador } from './computador.js';

export class LanHouse {
  clientes;
  computadores; // é necessário adicionar aqui também?

  constructor() {
    this.clientes = [];
    this.computadores = [];
  }

  addClient(client) {
    if (client instanceof Client) {
      this.clientes.push(client);
      console.log(`✅ Cliente ${client.nome} adicionado com sucesso.`);
      return;
      // return `✅ Cliente ${client.nome} adicionado com sucesso.` porque este não funciona?
    }
    console.error(
      '❌ Erro: O objeto fornecido não é uma instância da classe Client.'
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
      '❌ Erro: O objeto fornecido não é uma instância da classe Computador.'
    );
    return;
  }
}
