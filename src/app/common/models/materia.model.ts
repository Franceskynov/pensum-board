import {Materia} from 'app/common';

export class MateriaModel implements Materia {
  public mai_codmat: string;
  public matnom: string;
  public nf: number;

  constructor(args: Materia = {} as Materia) {

    let {
      mai_codmat = '',
      matnom = '',
      nf = 0.0
    } = args;

    this.mai_codmat = mai_codmat;
    this.matnom = matnom;
    this.nf = nf;

  }


}
