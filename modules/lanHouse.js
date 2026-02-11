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

    this.sessoes = [];
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

    if (this.client.status === true) {
      console.log(`❌ O cliente ${this.client.nome} já tem uma sessão iniciada.`);
      return;
    }

    if (this.computer.ocupar() === false) {
      console.log(`❌ O computador ${this.computer.id} já está ocupado`);
      return;
    }

    this.client.initSession(horario);

  }

  endSession(client, computer, horario) {
    this.itemExist(client, 'Cliente');
    this.itemExist(computer, 'Computador');

    this.computer.liberar();
    this.client.endSession(horario);

    // console.log(this.client.calcTime());

    const [hora, minutos, segundos] = this.client.calcTime().split(':');
    const valorCobrado = this.calcTotalValue(hora, minutos, segundos);

    // if(hora === '00'){
    //   console.log(`Valor total: ${valorCobrado} por ${Number(minutos)} ${Number(minutos) > 1 ? 'minutos' : 'minuto'}`);
    // }
    // if(hora !== '00'){
    //   console.log(`Valor total: ${valorCobrado} por ${Number(minutos)} ${Number(minutos) > 1 ? 'minutos' : 'minuto'}`);
    // }
    let textoValor = `Valor total: ${valorCobrado} por ${hora === '00' ?'' : hora === '01' ? '1 hora e' : `${Number(hora)} horas e`} ${Number(minutos) === '00' ? '' : Number(minutos) === '01' ? '1 minuto' : `${Number(minutos)} minutos`}`
    textoValor = textoValor.replace('  ', ' ')
    console.log(textoValor);
    
  } 

  calcTotalValue(hora, minutos, segundos) {
    hora = hora * 60;

    let valorPorMinuto = this.computer.precoPorHora / 60;
    let valorTotal = 0;
    let tempoTotal = Number(hora) + Number(minutos) + Number(segundos);
    let valorMinimo = this.computer.precoPorHora * 0.5;
    let tempoMinimo = 30;
    
    if(tempoTotal < tempoMinimo){
      const valorFormatado = valorMinimo.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      });
      // console.log('do if',valorFormatado)
      return valorFormatado
    }

    // console.log(tempoTotal);
    valorTotal = valorPorMinuto * tempoTotal;
    const valorFormatado = valorTotal.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    });

    return valorFormatado;
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
  relatorioPCs() {
    console.log('💻 Relatório de computadores: 💻');
    console.log('<----------------------------->');
    this.computadores.forEach((computador) => {
      console.log(
        `Computador ${computador.id}: ${computador.status ? 'Ocupado' : 'Livre'}`
      );
    });
    console.log('<----------------------------->');
  }
}
