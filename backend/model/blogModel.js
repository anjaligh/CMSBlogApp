const mongoose= require('mongoose');
// mongoose.connect('mongodb://localhost:27017/CMSBlogDB');
mongoose.connect('mongodb+srv://anjali:anjali1@anjali.5ol6pxz.mongodb.net/CMSBlogDB?retryWrites=true&w=majority');
const Schema= mongoose.Schema


var BlogSchema= new Schema({
    mailid: {type:String,required:true},
    username: {type:String,required:true},
    accountType: {type:String,required:true},
    title: {type:String,required:true},
    category:{type:String,required:true},
    postImage:{type:String,required:true},
    description: {type:String,required:true}
});

var blogData= mongoose.model('Blog',BlogSchema);
module.exports=blogData;