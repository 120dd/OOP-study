export class Guitar {
    #serialNumber;
    #price;
    #spec;
    constructor(serialNumber,price,spec) {
        this.#serialNumber = serialNumber;
        this.#price = price;
        this.#spec = spec;
    }
    
    getSerialNumber = () => this.#serialNumber;
    getPrice = () => this.#price;
    getSpec = () => this.#spec;
}