import { Seleccion } from './seleccion';

export class Campeonato {
  constructor(
    public id: number,
    public nombre: string,
    public pais: Seleccion,
    public año: number
  ) {}
}
