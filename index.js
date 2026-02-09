import { Client } from './modules/cliente.js';
import { Computador } from './modules/computador.js';
import { LanHouse } from './modules/lanHouse.js';


//computadores
const pcGamer = new Computador(2);
const pcLixo = new Computador(1);

//clientes
const pedrinho = new Client('Pedro');
const felipe = new Client('Felipe')

//lan house
const corujao = new LanHouse();

corujao.addClient(pedrinho);
corujao.addClient(felipe)

corujao.addComputer(pcGamer);
corujao.addComputer(pcLixo);

// console.log(corujao);
corujao.initSession('Pedro', 2, '11:53')
corujao.initSession('Felipe', 1, '14:34')


