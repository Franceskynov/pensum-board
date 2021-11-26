import {Pensum, Ciclo} from 'app/common';

export class PensumModel implements Pensum {
  public carnet: string;
  public carrera: string;
  public cum: string;
  public id: string;
  public nombre: string;
  public pensum: Array<Ciclo>;

  constructor(args: Pensum = {} as Pensum) {

    let {
      carnet = '',
      carrera = '',
      cum = '',
      id = '',
      nombre = '',
      pensum = [],
    } = args;

    this.carnet = carnet;
    this.carrera = carrera;
    this.cum = cum;
    this.id = id;
    this.nombre = nombre;
    this.pensum = pensum;
  }

}
