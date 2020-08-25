import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'firstPipe'
})
export class FirstPipePipe implements PipeTransform {

  transform(value: any): number {
    const todayDate: Date = new Date();
    var dateLessTimeAttribute: any = new Date(todayDate.getFullYear(), todayDate.getMonth(), todayDate.getDate());
    var differenceInDate = Math.abs(value - dateLessTimeAttribute);
    var convertToSeconds = differenceInDate * 0.001;
    var secondsInDay = 86400;
    var daysLeft = convertToSeconds/secondsInDay;

    if(daysLeft >= 1 && value > dateLessTimeAttribute){
      return daysLeft
    }else{
      return 0
    }
  }
  

}
