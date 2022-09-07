import { DogDoor } from "./dogDoor/dogDoor.js";
import { Remote } from "./dogDoor/remote.js";
import { BarkRecognizer } from "./dogDoor/barkRecognizer.js";
import { BarkSound } from "./dogDoor/barkSound.js";

const dogDoor = new DogDoor();
const remote = new Remote(dogDoor);
const burkRecognizer = new BarkRecognizer(dogDoor);
burkRecognizer.recodeBark(new BarkSound('bark!'));
remote.pressSetTime({ milliSeconds:1000 });
burkRecognizer.hearSound(new BarkSound('wall!'));
setTimeout(()=>{remote.pressButton()},2000)