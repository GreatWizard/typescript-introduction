abstract class Animal {
  static planet: string = "earth";
  readonly name: string;
  private _type: string | undefined;
  abstract makeSound(): void;
  public constructor(pName: string) {
    this.name = pName;
    this._type = undefined;
  }
  get type(): string | undefined {
    return this._type;
  }
  set type(pType: string | undefined) {
    this._type = pType;
  }
  move(): void {
    console.log(`roaming the ${Animal.planet}...`);
  }
}

class Lion extends Animal {
  makeSound() {
    console.log(`${this.name} says "ROAR!"`);
  }
}

let lion = new Lion("Léo");
lion.makeSound();
