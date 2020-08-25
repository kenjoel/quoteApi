import { Car } from "./car";
import { Engine } from './engine';
import { Wheels } from './wheel';


function main(){
    let engine = new Engine()
    let wheel = new Wheels()
    let car = new Car(engine, wheel)
    car.startEngine()
}

main();