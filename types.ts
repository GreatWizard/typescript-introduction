let isDone: boolean = false;
let decimal: number = 6;
let color: string = "blue";
let list: number[] = [1, 2, 3];
let x: [string, number] = ["hello", 10];
console.log(x[0].substr(1)); // OK
console.log(x[1].substr(1)); // Error, 'number' does not have 'substr'

enum Color {
  Red,
  Green,
  Blue
}
let c: Color = Color.Green;

let notSure: any = 4;
notSure = "maybe a string instead"; // OK
notSure = false; // OK

function warnUser(): void {
  console.log("This is my warning message");
}

function error(message: string): never {
  throw new Error(message);
}

let create = function(o: object | null): void {
  console.log(`create with ${o}`);
};
create({ prop: 0 }); // OK
create(null); // OK
create(42); // Error
create("string"); // Error
create(false); // Error
create(undefined); // Error

let someValue: any = "this is a string";
let strLength: number = (<string>someValue).length;
let strLength2: number = (someValue as string).length;
