export class Quote {
    likes:number;
    dislikes:number;
    constructor(public name:string,public detail:string,public completeDate:Date){
        this.likes=0;
        this.dislikes=0;
    }
}
