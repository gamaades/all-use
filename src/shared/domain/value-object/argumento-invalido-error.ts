export class ArgumentoInvalidoError {
  constructor(public message: string, public errors: string[] = []) { }
}
