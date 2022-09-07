import { BarkSound } from "./barkSound.js";

export class BarkRecognizer {
    #door;
    constructor(door) {
        this.#door = door;
    }
    
    recodeBark(sound){
        if (sound instanceof BarkSound){
            this.#door.addAllowedSound(sound);
        }
    }
    
    hearSound(sound){
        if (sound instanceof BarkSound) {
            this.#door.openWithBark(sound);
        }
    }
}