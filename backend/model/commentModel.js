const mongoose= require('mongoose');
// mongoose.connect('mongodb://localhost:27017/CMSBlogDB');
mongoose.connect('mongodb+srv://anjali:anjali1@anjali.5ol6pxz.mongodb.net/CMSBlogDB?retryWrites=true&w=majority',
(err)=>{
    if(err){
        console.log("DB not connencting")
    }else{
        console.log("DB connected")
    }
}
);
const Schema= mongoose.Schema


var CommentSchema= new Schema({
    mailid: {type:String,required:true},
    username: {type:String,required:true},
    blogid:{type:String,required:true},
    comment: {type:String,required:true},
    commentdate:{type:Date,required:true}
});

var commentData= mongoose.model('Comment',CommentSchema);
module.exports=commentData;