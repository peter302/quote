export class Quote {
    likes:number;
    dislikes:number;
    constructor(public name:string,public detail:string,public completeDate:Date,public title:string){
        this.likes=0;
        this.dislikes=0;
    }
}
