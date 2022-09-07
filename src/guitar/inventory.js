import { Guitar } from "./guitar.js";

export class Inventory {
    #guitars;
    constructor() {
        this.#guitars = [];
    }
    addGuitar(serial,price,spec){
        const newGuitar = new Guitar(serial,price,spec);
        this.#guitars.push(newGuitar);
    }
    getGuitar(serialNum){
        return this.#guitars.filter(guitar=>guitar.getSerialNumber() === serialNum);
    }
    search(spec) {
        return spec.matches(this.#guitars, spec);
    }
}