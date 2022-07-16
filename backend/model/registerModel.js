const mongoose= require('mongoose');
mongoose.connect('mongodb://localhost:27017/CMSBlogDB');
const Schema= mongoose.Schema


var RegisterSchema= new Schema({
    mailid: {type:String,unique:true},
    username: {type:String,required:true},
    accountType: {type:String,required:true},
    password: {type:String,required:true},
    passwordCnfrm: {type:String,required:true}
});

var registerData= mongoose.model('Users',RegisterSchema);
module.exports=registerData;