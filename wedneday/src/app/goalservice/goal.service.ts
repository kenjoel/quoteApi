import { Injectable } from '@angular/core';
import { Goals } from '../goals';


@Injectable({
  providedIn: 'root'
})
export class GoalService {

  goals: Goals[] = [
    new Goals(1, 'Learn Software Development', 'Figure out your strengths and weaknesses and try to sum up who you are what you are good at what you like what you get paid for what the world needs Find a balance', new Date(2019, 12,23)),
    new Goals(3,'Focus on what you do','Improve yourself everyday and you ability to earn', new Date(2018, 6, 29)),
    new Goals(2,'1/10','Gold comes quantatively and in plenty to any man who is able to set aside 1/10 of his savings', new Date(2019,6,8)),
    new Goals(4,'Budget 9/10','Gold comes in pleanty to anyman who is able to find profitable investment for it, Multiplying even as flocks', new Date(2019, 6, 28)),
    new Goals(5,'invest 9/10','Gold escapes anyman who trusts his own inexperience in its investment', new Date(2017,8,6)),
    new Goals(6,'seek advice','Gold escapes anyman who trusts, scammers and tricksters or conmen in its investment', new Date(2020,2,5)),
   ];


   getGoal(id){
    for(let goal of Goals){
      if(goal.id = id){
        return goal
      }
    }
  }
  



  getGoals(){

    return this.goals
  }

  constructor() { }
}



/*
new Goals(1, , '', new Date(2020, 8 ,9)),
    new Goals(2,'','', new Date(2019,5,12)),
    new Goals(3,'','', new Date(2018,8,7)),
    new Goals(4,'','', new Date(2019,7,6)),
    new Goals(5,'','', new Date(2020,1,2)),
    new Goals(6,'',', new Date(2020,8,08))
 
*/

  /*
   */