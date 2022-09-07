export class GuitarSpec {
    #builder;
    #model;
    #type;
    #backWood;
    #topWood;
    #numString;
    constructor(builder,model,type,backWood,topwood,numString) {
        this.#builder = builder;
        this.#model = model;
        this.#type = type;
        this.#backWood = backWood;
        this.#topWood = topwood;
        this.#numString = numString;
    }
    getBuilder = () => this.#builder;
    getModel = () => this.#model;
    getType = () => this.#type;
    getBackWood = () => this.#backWood;
    getTopWood = () => this.#topWood;
    getNumString = () => this.#numString;
    
    matches = (guitars,matchSpec) => {
        return guitars.filter(guitar=>{
            return (guitar.getSpec().getBuilder() === matchSpec.getBuilder()||matchSpec.getBuilder()===null)&&
                (matchSpec.getModel()===null||guitar.getModel().getModel().toLowerCase() === matchSpec.getModel().toLowerCase())&&
                (guitar.getSpec().getType() === matchSpec.getType()||matchSpec.getType() === null)&&
                (guitar.getSpec().getBackWood() === matchSpec.getBackWood() || matchSpec.getBackWood() === null)&&
                (guitar.getSpec().getTopWood() === matchSpec.getTopWood()||matchSpec.getTopWood()===null) &&
                (guitar.getSpec().getNumString() === matchSpec.getNumString()||matchSpec.getNumString()===null)
        });
    }
}