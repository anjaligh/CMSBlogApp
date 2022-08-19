export class BlogModel{
    constructor(
    public _id : String,
    public mailid:String,  
    public username:String,  
    public accountType : String,
    public title: String,
    public category : String,
    public postImage : String,
    public description : String,
    public postdate:Date
    // public comments :Object
    ){}
}