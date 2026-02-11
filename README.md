## Desafio Shakers - Lan House

Projeto em JavaScript (ESM) que simula o funcionamento de uma lan house: cadastro de clientes e computadores, inicio e fim de sessoes, calculo de tempo e cobranca.

### Estrutura

- index.js: script principal com um fluxo de exemplo.
- modules/cliente.js: classe `Client` (cliente e controle de sessao).
- modules/computador.js: classe `Computador` (id, status e preco por hora).
- modules/lanHouse.js: classe `LanHouse` (orquestra clientes, computadores e sessoes).

### Como executar

```bash
node index.js
```

### Como o codigo funciona

1. Em `index.js` sao criados alguns computadores (`Computador`) e clientes (`Client`).
2. Uma instancia de `LanHouse` recebe os clientes e computadores via `addClient()` e `addComputer()`.
3. O fluxo chama `initSession(nomeCliente, idComputador, horario)` para iniciar a sessao.
4. Em seguida chama `endSession(nomeCliente, idComputador, horario)` para encerrar a sessao e calcular o valor.
5. Por fim, `relatorioPCs()` lista o status de todos os computadores.

### Detalhes das classes

#### Client (modules/cliente.js)

- Armazena nome, horario de inicio e fim, tempo total e status da sessao.
- `initSession(horario)` valida o horario, registra o inicio e altera o status.
- `endSession(horario)` registra o fim e altera o status.
- `calcIni()` e `calcEnd()` transformam horario em minutos.
- `calcTime()` calcula o tempo total e formata como HH:MM:SS.

#### Computador (modules/computador.js)

- Possui `id` incremental, `status` (ocupado/livre) e `precoPorHora`.
- `ocupar()` marca o computador como ocupado se estiver livre.
- `liberar()` marca o computador como livre se estiver ocupado.
- `statusComputador()` imprime o status atual.

#### LanHouse (modules/lanHouse.js)

- Mantem arrays de clientes e computadores.
- `addClient()` e `addComputer()` validam o tipo e adicionam.
- `itemExist()` localiza cliente por nome e computador por id.
- `initSession()` valida, verifica se cliente ja esta em sessao, ocupa o computador e inicia a sessao no cliente.
- `endSession()` libera o computador, encerra a sessao do cliente e calcula o valor.
- `calcTotalValue()` calcula valor por minuto com valor minimo de 30 minutos.
- `relatorioPCs()` imprime relatorio de ocupacao.

### Exemplo de uso

```js
const pcGamer = new Computador(2);
const pedrinho = new Client('Pedro');
const corujao = new LanHouse();

corujao.addClient(pedrinho);
corujao.addComputer(pcGamer);

corujao.initSession('Pedro', 1, '11:53');
corujao.endSession('Pedro', 1, '15:58');
```

### Observacoes

- O formato de horario esperado e `HH:MM`.
- O valor minimo de cobranca corresponde a 30 minutos do `precoPorHora`.

### Decisoes de implementacao

- Usei classes separadas para cliente, computador e lan house para manter responsabilidades claras.
- O `id` do computador e incremental e o preco por hora e definido no construtor.
- O calculo de tempo usa minutos para simplificar a cobranca e depois formata para `HH:MM:SS`.
- Mensagens no console explicam cada acao para facilitar o acompanhamento do fluxo.

### Desafios extras implementados

- Relatorio de computadores livres e ocupados com `relatorioPCs()`.
- Tempo minimo de cobranca de 30 minutos.
- Precos diferentes por computador.
- Tratamento de erros: horario invalido, cliente/computador inexistente, cliente com sessao ativa, computador ocupado, computador ja livre.
- Tratamento de ortografia no texto do valor cobrado (singular/plural e limpeza de espacos).

