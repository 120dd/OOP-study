export class Remote {
    constructor(door) {
        this.door = door;
    }
    pressButton(){
        if (this.door.isOpen()){
            this.door.close();
        } else {
            this.door.open();
        }
    }
    
    pressSetTime(time){
        this.door.setCloseTime(time.milliSeconds);
    }
}