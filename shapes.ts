/// <reference path="pluralize.d.ts" />
import pluralize from "./pluralize";

export class Triangle {
  constructor() {
    console.log(`${pluralize("Shape")} : Here is a Triangle`);
  }
}
export class Square {
  constructor() {
    console.log(`${pluralize("Shape")} : Here is a Square`);
  }
}
