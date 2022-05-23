export class ActionConfigData {
  private _name: string;

  private _probability: number;

  private _type: string;

  constructor(name: string, probability: number, type: string) {
    this._name = name;
    this._probability = probability;
    this._type = type;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get probability(): number {
    return this._probability;
  }

  set probability(value: number) {
    this._probability = value;
  }

  get type(): string {
    return this._type;
  }

  set type(value: string) {
    this._type = value;
  }
}
