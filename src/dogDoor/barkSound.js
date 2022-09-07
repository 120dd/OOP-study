export class BarkSound {
    #sound
    constructor(sound) {
        this.#sound = sound;
    }
    
    getSound(){
        return this.#sound;
    }
}