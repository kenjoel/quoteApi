import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Goals } from "../goals";

@Component({
  selector: 'app-secondcomponent',
  templateUrl: './secondcomponent.component.html',
  styleUrls: ['./secondcomponent.component.css']
})
export class SecondcomponentComponent implements OnInit {

  @Input() post:Goals;
  @Output() isComplete = new EventEmitter<boolean>();

  doneWith(itsComplete: boolean){
    this.isComplete.emit(itsComplete)
    
  }
  
  constructor() { }

  ngOnInit(): void {
  }

}
