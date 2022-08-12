const express = require('express');
const mongoose = require('mongoose');

const registerData = require('./model/registerModel');
const blogData = require('./model/blogModel');
const categoryData = require('./model/categoryModel');
const cors = require('cors');
const jwt = require('jsonwebtoken');
// const multer  = require('multer');
const bodyparser = require('body-parser');
// const userauth = require('./routes/userauthrouter');
// const checkAuth = require('./middleware/check-auth');

var app = new express;

app.use(cors());
app.use(bodyparser.json());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


function verifyToken(req,res,next){
  console.log("tokenverify")
  console.log(req.headers.authorization);
  if(!req.headers.authorization)
  {

  return res.status(401).send('Unauthorized user');
}
let token= req.headers.authorization.split(' ')[1];
console.log("token");
console.log(token);
if(token==null){
  return res.status(401).send('Unauthorized user');
}
let payload=jwt.verify(token, 'CMSBlogApp');
console.log(payload)
if(!payload){
  return res.status(401).send('Unauthorized user');
}
req.userId=payload.userid
console.log("token verified")
next()
  }

app.post('/register', (req, res) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
  console.log('hello backend')
  console.log(req.body);
  var newUser = {
    mailid: req.body.mailid,
    username: req.body.username,
    accountType: req.body.accountType,
    password: req.body.password,
    passwordCnfrm: req.body.passwordCnfrm
  }
  var newRegisterData = new registerData(newUser)
  newRegisterData.save()
    .then((result) => {

      res.json({ success: true, message: "User Created" })
    }).catch(err => {
      if (err.code === 11000) {

        return res.json({ success: false, message: "Email id already exists" })


      }
      return res.json({ success: false, message: "Authentication Failed" })

    })

  // res.send('success');
})

app.post('/login', (req, res) => {
  //res.json("Hai");
  console.log("login backend");
  console.log(req.body);
  registerData.find({ mailid: req.body.mailid })
    .exec()
    .then((result) => {
      if (result.length < 1) {
        return res.json({ success: false, message: "user not found" })
      }
      const user = result[0];
      // if (req.body.accountType!==user.accountType) {
      //     return res.json({ success: false, message: "Account Type Mismatch!!" })
      // }
      // else{
      // bcrypt.compare(req.body.password,user.password,(err, ret) => {
      if (req.body.password === user.password) {
        let accountType = user.accountType;
        let username = user.username;
        let mailid = user.mailid
        const payload = {
          userid: user._id
        }
        const token = jwt.sign(payload, 'CMSBlogApp');
        return res.json({ success: true, message: "Login successful", token: token, accountType: accountType, username: username, mailid: mailid })

      }
      else {
        return res.json({ success: false, message: "Password not matched" })
      }
      // })
      // }

    }).catch(err => {
      res.json({ success: false, message: "Auth Failed" })
    });
})

app.post('/createpost',verifyToken, (req, res) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
  console.log('hello backend')
  console.log(req.body);
  var newBlog = {
    mailid: req.body.mailid,
    username: req.body.username,
    accountType: req.body.accountType,
    title: req.body.title,
    category: req.body.category,
    postImage: req.body.postImage,
    description: req.body.description
  }
  var newBlogData = new blogData(newBlog)
  newBlogData.save()
    .then((result) => {

      res.json({ success: true, message: "Blog data added" })
    }).catch(err => {
      
      return res.json({ success: false, message: "Couldn't save data. Please try again" })

    })
})

app.post('/createcategory',verifyToken,(req, res) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
  console.log('hello backend')
  console.log(req.body);
  var newCategory= {
    categoryDescription: req.body.categoryDescription,
    categoryImage: req.body.categoryImage,
    categoryName: req.body.categoryName
  }

  var newCategoryData = new categoryData(newCategory)
  newCategoryData.save()
    .then((result) => {
console.log("added")
      res.json({ success: true, message: "Category added successfully" })
    }).catch(err => {
      if (err.code === 11000) {

        return res.json({ success: false, message: "Category already exists" })


      }
      return res.json({ success: false, message: "Couldn't save data. Please try again" })

    })
})

app.get('/getcategories',(req, res) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS'); 
  categoryData.find({})
      .then((categories) => {
          console.log(categories)
          res.send(categories)
      });
});

app.get('/userslist',(req, res) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
  registerData.find({"mailid": { $ne: "rootuser@mail.com" }})
      .then((users) => {
          console.log(users)
          res.send(users)
      });
});

app.put('/editprivilage',(req,res)=>{
  console.log(req.body)
  id=req.body._id,
  //profileId= req.body.profileId,
    accountType= req.body.accountType,
    
    registerData.findByIdAndUpdate({"_id":id},
                              {$set:{
                                //"profileId":productId,
                                "accountType":accountType}})
 .then(function(){
  res.json({ success: true, message: "User privilage updated successfully" });
 })
})
app.get('/getmyblogs/:mailid',(req, res) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
  const mailid=req.params.mailid
  blogData.find({ "mailid": mailid })
      .then((blogs) => {
          console.log(blogs)
          res.send(blogs)
      });
});

app.get('/findcategory/:category',(req, res) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
  const category=req.params.category
  blogData.find({ "category": category })
      .then((blogs) => {
          console.log(blogs)
          res.send(blogs)
      });
});

app.get('/getsingleblog/:id',(req, res) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
  const id=req.params.id
  blogData.find({ "_id": id })
      .then((blog) => {
          console.log(blog)
          res.send(blog)
      });
});

app.put('/editblog',(req,res)=>{
  console.log(req.body)
  id=req.body._id,
  //profileId= req.body.profileId,
  mailid= req.body.mailid,
    username= req.body.username,
    accountType= req.body.accountType,
    title= req.body.title,
    category= req.body.category,
    postImage= req.body.postImage,
    description=req.body.description
    blogData.findByIdAndUpdate({"_id":id},
                              {$set:{
                                //"profileId":productId,
                                "title":title,
                                "category":category,
                               "postImage":postImage,
                               "description":description}})
 .then(function(){
  res.json({ success: true, message: "Blog data updated successfully" });
 })
})

app.get('/getsinglecategory/:id',(req, res) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
  const id=req.params.id
  console.log("backendID");
  console.log(id);
  categoryData.find({ "_id": id })
      .then((category) => {
          console.log("category")
          console.log(category)
          res.send(category)
      });
});
app.put('/editcategory',(req,res)=>{
  console.log(req.body)
  id=req.body._id,
  //profileId= req.body.profileId,
  categoryDescription= req.body.categoryDescription,
  categoryImage= req.body.categoryImage,
  categoryName= req.body.categoryName
    categoryData.findByIdAndUpdate({"_id":id},
                              {$set:{
                                //"profileId":productId,
                                "categoryName":categoryName,
                                "categoryImage":categoryImage,
                               "categoryDescription":categoryDescription,
                               }})
 .then(function(){
  res.json({ success: true, message: "Category updated successfully" });
 })
})

app.delete('/removecategory/:id',(req,res)=>{
   
  id = req.params.id;
  categoryData.findByIdAndDelete({"_id":id})
  .then(()=>{
      console.log('success')
      res.json({ success: true, message: "Category deleted successfully!" });
  })
})
app.delete('/remove/:id',(req,res)=>{
   
  id = req.params.id;
  blogData.findByIdAndDelete({"_id":id})
  .then(()=>{
      console.log('success')
      res.json({ success: true, message: "Blog deleted successfully!" });
  })
})


const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Listening to port ${PORT}`);
});

// app.listen(3000, function () {
//     console.log('listening to port 3000')
// });