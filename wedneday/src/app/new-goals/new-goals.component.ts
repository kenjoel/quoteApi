import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Goals } from '../goals'

@Component({
  selector: 'app-new-goals',
  templateUrl: './new-goals.component.html',
  styleUrls: ['./new-goals.component.css']
})
export class NewGoalsComponent implements OnInit {

  @Output() addGoal = new EventEmitter <Goals>();

  renderGoalToParent(){
    this.addGoal.emit(this.newTasks);
  }

  newTasks = new Goals( 2, "","",new Date())



  constructor() { }

  ngOnInit(): void {
  }

}
