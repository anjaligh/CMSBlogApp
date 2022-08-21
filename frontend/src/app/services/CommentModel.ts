export class CommentModel{
    constructor(
    public _id : String,
    public mailid:String,  
    public username:String,  
    public blogid : String,
    public comment: String,
    public commentdate:Date
    ){}
}