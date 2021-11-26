import {Ciclo} from 'app/common';

export interface Pensum {
  id: string;
  nombre: string;
  carnet: string;
  carrera: string;
  cum: string;
  pensum: Array<Ciclo>;
}
