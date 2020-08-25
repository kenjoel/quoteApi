import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appStrikethrough]'
})
export class StrikethroughDirective {
  //click on name, strike through the name

  constructor(private target:ElementRef) {
  }

  // constructor(private elem:ElementRef){
  // }

  @HostListener("click") onClicks(){
    this.lineThrough('line-through')
  }

  @HostListener('dblclick') onDbClicks(){
    this.lineThrough('None')
  }



  private lineThrough(action:string){
    this.target.nativeElement.style.textDecoration = action
  }

}
