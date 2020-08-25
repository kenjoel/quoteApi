import { Injectable } from '@angular/core';
import { Goals } from '../goals';


@Injectable({
  providedIn: 'root'
})
export class GoalService {

  goals: Goals[] = [
    new Goals(1, 'Watch finding Nemo', 'Find an online version and watch merlin find his son', new Date(2020, 8 ,9)),
    new Goals(2,'Buy Cookies','I have to buy cookies for the parrot', new Date(2019,5,12)),
    new Goals(3,'Get new Phone Case','Diana has her birthday coming up soon', new Date(2019,7,8)),
    new Goals(4,'Get Dog Food','Pupper likes expensive snacks', new Date(2018,8,7)),
    new Goals(5,'Solve math homework','Damn Math', new Date(2019,7,6)),
    new Goals(6,'Plot my world domination plan','Cause I am an evil overlord', new Date(2020,1,2)),
  ];
  getGoals(){

    return this.goals
  }

  constructor() { }
}
