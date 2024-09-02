export class todoDto {
  context: string;
  istoDoDone: boolean;

  constructor(context: string, IstoDoDone: boolean) {
    this.context = context;
    this.istoDoDone = IstoDoDone;
  }
}
