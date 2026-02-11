import { Client } from './modules/cliente.js';
import { Computador } from './modules/computador.js';
import { LanHouse } from './modules/lanHouse.js';


//computadores
const pcGamer = new Computador(2);
const pcLixo = new Computador(1);
const pcTop = new Computador(5)
const pcTeste = new Computador(3)

//clientes
const pedrinho = new Client('Pedro');
const felipe = new Client('Felipe')
const maria = new Client('Maria')

//lan house
const corujao = new LanHouse();

corujao.addClient(pedrinho);
corujao.addClient(felipe)
corujao.addClient(maria);

corujao.addComputer(pcGamer);
corujao.addComputer(pcLixo);
corujao.addComputer(pcTop)
corujao.addComputer(pcTeste)
// console.log('antes do init',pedrinho)
// console.log(corujao);
corujao.initSession('Pedro', 2, '11:53')
corujao.initSession('Felipe', 1, '14:34')
corujao.initSession('Maria', 3, '15:00')
corujao.initSession('Pedro', 2, '11:53')

corujao.endSession('Pedro', 2, '15:58')
corujao.endSession('Felipe', 1, '22:34')
corujao.endSession('Maria', 3, '15:02')

corujao.relatorioPCs()

// console.log(pcGamer)
// console.log(pcLixo)
// console.log('depois do init', pedrinho)
// corujao.endSession('Pedro', 2, '15:58')
// console.log(pedrinho)


//falta confirmar se o cliente está na sessão antes de finalizar
//falta o relatorio de pcs
//falta verificar se o cliente tem sessão iniciada antes de finalizar
//falta verificar se o cliente tem sessão iniciada antes de iniciar outra checked