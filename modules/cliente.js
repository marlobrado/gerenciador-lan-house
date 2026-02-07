export class Client {
  constructor(nome) {
    this.nome = nome;
    this.horarioInicio = 0;
    this.horarioFim = null;
    this.tempoTotal = null;
  }

  initSession(horarioInicio) {
    const [horas, minutos] = horarioInicio.split(':');

    let horaInicio = new Date();

    horaInicio.setHours(horas, minutos, 0);

    this.horarioInicio = horaInicio.toLocaleString('pt-BR');
    return this.horarioInicio;
  }
  endSession(horarioFim) {
    const [horas, minutos] = horarioFim.split(':');

    let horaFim = new Date();

    horaFim.setHours(horas, minutos, 0);

    this.horarioFim = horaFim.toLocaleString('pt-BR');

    return this.horarioFim;
  }

  calcIni() {
    const inicio = this.horarioInicio.split(', ')[1];

    let [horas, minutos, segundos] = inicio.split(':');

    horas = Number(horas) * 60;
    segundos = 0;
    minutos = Number(minutos) + horas;

    return minutos;
  }

  calcEnd() {
    const fim = this.horarioFim.split(', ')[1];

    let [horas, minutos, segundos] = fim.split(':');

    horas = Number(horas) * 60;
    segundos = 0;
    minutos = Number(minutos) + horas;

    return minutos;
  }
  calcTime() {
    let tempoTotal = this.calcEnd() - this.calcIni();

    let horas = Math.floor(tempoTotal / 60);

    let minutos = tempoTotal % 60;

    if (minutos <= 9) {
      if (horas <= 9) {
        return (this.tempoTotal = `0${horas}:0${minutos}:00`);
      }
      return (this.tempoTotal = `${horas}:0${minutos}:00`);
    }
    if (horas <= 9) {
      return (this.tempoTotal = `0${horas}:${minutos}:00`);
    }
    return (this.tempoTotal = `${horas}:${minutos}:00`);
  }
}
