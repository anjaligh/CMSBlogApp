const mongoose= require('mongoose');
// mongoose.connect('mongodb://localhost:27017/CMSBlogDB');
mongoose.connect('mongodb+srv://anjali:anjali1@anjali.5ol6pxz.mongodb.net/CMSBlogDB?retryWrites=true&w=majority');
const Schema= mongoose.Schema


var CategorySchema= new Schema({
    categoryName: {type:String,unique:true},
    categoryImage: {type:String,required:true},
    categoryDescription:{type:String,required:true}
});

var categoryData= mongoose.model('Categories',CategorySchema);
module.exports=categoryData;