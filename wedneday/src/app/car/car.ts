import { Engine } from './engine';
import { Wheels } from './wheel';

export class Car{
  

  constructor(private engine: Engine, private wheels: Wheels){
   
  }

  startEngine(){
    this.engine.start();
  }
}