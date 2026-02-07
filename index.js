import { Client } from './modules/cliente.js';
import { Computador } from './modules/computador.js';
import { LanHouse } from './modules/lanHouse.js';

const pcGamer = new Computador(2);

console.log(pcGamer, '1');
console.log(pcGamer.ocupar(), '2');
console.log(pcGamer.statusComputador(), '3');
console.log(pcGamer.ocupar(), '4');

const pedrinho = new Client('Pedro');
// console.log('1 - ', pedrinho.initSession("12:44"))
// console.log(pedrinho)
pedrinho.initSession('1:44');
pedrinho.endSession('14:55');
pedrinho.calcTime();
console.log(pedrinho);

const corujao = new LanHouse();

corujao.addClient(pedrinho);

corujao.addComputer(pcGamer);
const pcLixo = new Computador(1);
corujao.addComputer(pcLixo);

console.log(corujao);
