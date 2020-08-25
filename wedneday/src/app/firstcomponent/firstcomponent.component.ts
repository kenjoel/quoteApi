import { Component, OnInit } from '@angular/core';
import { Goals } from '../goals';
import { GoalService } from "../goalservice/goal.service";
import { AlertService } from "../alert-service/alert.service";
import { Quotes } from '../quotes';
import { HttpClient } from "@angular/common/http";
import { QuoteLoadService } from '../quote-service/quote-load.service'

@Component({
  selector: 'app-firstcomponent',
  templateUrl: './firstcomponent.component.html',
  styleUrls: ['./firstcomponent.component.css']
})
export class FirstcomponentComponent implements OnInit {


  posts : Goals[];

  alertService: AlertService;
  quote: Quotes
  
  addTheGoal(goal){
    let taskLength = this.posts.length
    goal.id = taskLength + 1;
    goal.completeDate = new Date(goal.completeDate)
    this.posts.push(goal)
  }


  showDescription(index){
    this.posts[index].showDescription = !this.posts[index].showDescription
  }

  spliceClickedTask(isComplete, index){
    if(isComplete){
      let confirmation = confirm(`Are you sure you want to get rid  of ${this.posts[index].name}`);
      if(confirmation){
        this.posts.splice(index,1);
        this.alertService.alert("You have succesfully deleted the goal")
      }
    }
    
  }

  constructor(goalService: GoalService, alertService:AlertService, private http:HttpClient, private quoteService: QuoteLoadService) {
      this.posts = goalService.getGoals();
      this.alertService = alertService;
   }

  ngOnInit(){
    this.quoteService.getApiQuotes();
    this.quote = this.quoteService.quotes
    
  }

}
