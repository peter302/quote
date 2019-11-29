export class Quote {
    likes:number;
    dislikes:number;
    constructor(public name:string,public detail:string,completeDate:Date){
        this.likes=0;
        this.dislikes=0;
    }
}
