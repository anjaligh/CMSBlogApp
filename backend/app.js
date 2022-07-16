const express = require('express');
const mongoose = require('mongoose');

const registerData = require('./model/registerModel');
const cors = require('cors');
const jwt= require('jsonwebtoken');
// const multer  = require('multer');
const bodyparser = require('body-parser');
// const userauth = require('./routes/userauthrouter');
// const checkAuth = require('./middleware/check-auth');

var app = new express;

app.use(cors());
app.use(bodyparser.json());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.post('/register',(req,res)=>{
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
    console.log('hello backend')
    console.log(req.body);
    var newUser={
        mailid: req.body.mailid,
        username: req.body.username,
        accountType: req.body.accountType,
        password: req.body.password,
        passwordCnfrm: req.body.passwordCnfrm
    }
var newRegisterData= new registerData(newUser)
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

app.post('/login',(req, res) => {
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
          if (req.body.password===user.password) {
            let accountType=user.accountType;
            let username=user.username;
            let mailid=user.mailid
            const payload={
              userid:user._id
            }
            const token=jwt.sign(payload,'CMSBlogApp');
            return res.json({ success: true, message: "Login successful", token:token, accountType:accountType,username:username,mailid:mailid})
            
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


const PORT=process.env.PORT||3001;
app.listen(PORT,()=>{
    console.log(`Listening to port ${PORT}`);
});

// app.listen(3000, function () {
//     console.log('listening to port 3000')
// });