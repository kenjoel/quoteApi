export class Goals {
    showDescription:boolean;
    constructor(public id:Number, public name:String, public description:String, public completeDate: Date){
        this.showDescription = false;
    }
}
