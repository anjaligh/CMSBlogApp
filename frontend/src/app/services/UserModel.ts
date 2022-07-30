export class UserModel{
    constructor(
    public _id : String,
    public mailid:String,  
    public username:String,  
    public accountType : String,
    public password: String,
    public passwordCnfrm : String,
    // public comments :Object
    ){}
}