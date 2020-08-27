import { Component, OnInit } from '@angular/core';
import { Goals } from "../goals";
import { GoalService } from "../goalservice/goal.service";
import { ActivatedRoute, ParamMap } from "@angular/router"

@Component({
  selector: 'app-secondcomponent',
  templateUrl: './secondcomponent.component.html',
  styleUrls: ['./secondcomponent.component.css']
})
export class SecondcomponentComponent implements OnInit {


  post:Goals;

  // @Input() post:Goals;
  // @Output() isComplete = new EventEmitter<boolean>();

  // doneWith(itsComplete: boolean){
  //   this.isComplete.emit(itsComplete)
    
  // }


  
  constructor(private route:ActivatedRoute, private service:GoalService) { }

  ngOnInit(){
    let id = this.route.snapshot.paramMap.get("id");
    this.service.getGoal(id)
  }

}
