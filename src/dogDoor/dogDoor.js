export class DogDoor {
    #Open = false;
    #closeTime = 5000;
    #allowedSounds = [];
    
    openWithBark(sound){
        if (!this.compareSound(sound)){
            console.log('소리가 다릅니다');
            return;
        }
        this.open();
    }
    
    open = () => {
        this.#Open = true;
        console.log('문이 열렸습니다');
        setTimeout(() => {
            if (this.isOpen()) {
                this.close();
            }
        }, this.#closeTime);
    }
    
    close = () => {
        this.#Open = false;
        console.log('문이 닫혔습니다');
    }
    
    isOpen = () => this.#Open;
    
    addAllowedSound(sound) {
        this.#allowedSounds.push(sound);
    }
    
    setCloseTime = (time) => {
        this.#closeTime = time;
    }
    
    compareSound(sound) {
        console.log(sound);
        return !!this.#allowedSounds.find(allowedSound => allowedSound.getSound() === sound.getSound());
    }
}