const bodyParser = require('body-parser');
var express = require('express');
const axios = require('axios');
const path = require('path');
const crypto = require('crypto');
var app = express();
var fs = require("fs");
const mongoose = require("mongoose");// version should be 5.13.7 for readstreamfs to work
const multer = require('multer');
const {GridFsStorage} = require('multer-gridfs-storage');
const Grid = require('gridfs-stream');
const methodOverride = require('method-override');


// Middleware
app.use(bodyParser.json());
app.use(methodOverride('_method'));
app.set('view engine', 'ejs');
// Middleware


/* Connecting mongodb DB */
const mongoURI = 'mongodb+srv://gagan:12345@profandbreath.mavyo.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const conn = mongoose.createConnection(mongoURI);

mongoose 
 .connect('mongodb+srv://gagan:12345@profandbreath.mavyo.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,   })   
 .then(() => console.log("Database connected!"))
 .catch(err => console.log(err));
/* Connecting mongodb DB */

/* Connecting static files */
app.use('*/css',express.static('public/css'));
app.use('*/js',express.static('public/js'));
app.use('*/images',express.static('public/images'));
/* Connecting static files */

/* defining schemas */
var UserSchema = new mongoose.Schema({
  username: String,
  email: String,
  phone: Number,
  password: String,
  pic_name:String,
}, {timestamps: true});

var ReportSchema = new mongoose.Schema({
  user_specific_id : String,
  voc_report : [{
  Prediction : Number,
  time : String,
  voc1 : Number,
  voc2 : Number,
  voc3 : Number,
  voc4 : Number,
  voc5 : Number,
  voc6 : Number,
  voc7 : Number,
  voc8 : Number,
  voc9 : Number,
  }],
},{timestamps:true});

var User = mongoose.model('User', UserSchema);
var Report = mongoose.model('Report',ReportSchema);
/* defining schemas */

/* Uploading files using multer */
let gfs;

conn.once('open', () => {
  // Init stream
  console.log("connection established");
  gfs = Grid(conn.db, mongoose.mongo);
  gfs.collection('uploads');
});

// Create storage engine
const storage = new GridFsStorage({
  url: mongoURI,
  file: (req, file) => {
    return new Promise((resolve, reject) => {
      crypto.randomBytes(16, (err, buf) => {
        if (err) {
          return reject(err);
        }
        const fileInfo = {
          filename: file.originalname,
          bucketName: 'uploads'
        };
        resolve(fileInfo);
      });
    });
  }
});
const upload = multer({ storage });

/* Uploading files using multer */

/* Routes */
app.get('/', function (req, res) {
    res.render('home')
 })

app.get('/login', function (req, res) {
   res.render('login',{error:0})
})

app.get('/signup', function (req, res) {
    res.render('signup',{success:0})
 })

 app.get('/about', function (req, res) {
    res.render('about')
 })

 app.post('/new_user',upload.single('avatar'),function (req, res, next) {
   // req.file is the `avatar` file
   // req.body will hold the text fields, if there were any
   console.log(req.file);
   console.log(req.body);
   let new_user = new User({
    username:req.body.username,
    password:req.body.password,
    email:req.body.email,
    phone:req.body.phone,
    pic_name:req.file.filename,
   })
   console.log(new_user);
   new_user.save();
   res.render('signup',{success:1});
 })

 app.post('/login/user',upload.single('avatar'),function(req,res,next){
   console.log(req.body);
   var got_username = req.body.username;
   var got_password = req.body.password;
   let others = [];
   User.findOne({username:got_username},(err,item)=>{
      if(err){
      }
      else{
        console.log(item);
        if(item==null){
          res.render('login',{error : "Wrong Username"})
        }
        else if(item.password==got_password){
          loged_user = item;
          Report.findOne({user_specific_id:loged_user._id},(err,item)=>{
            console.log(item);
            
            if(item==null){
              res.render('index',{user:loged_user,reports:null,misc:others})
            }
            else{
              item.voc_report.map((item)=>{
                let obj = {
                  time : item["time"],
                  Prediction : item["Prediction"]
                }
                others.push(obj);
              })
              res.render('index',{user:loged_user,reports:item.voc_report,misc:others})
            }
            
          })
        }
        else{
          res.render('login',{error:"Wrong Password"})
        }
      }
   })
 })

 app.get('/image/:filename', (req, res) => {
  gfs.files.findOne({ filename: req.params.filename }, (err, file) => {
    // Check if file
    if (!file || file.length === 0) {
      return res.status(404).json({
        err: 'No file exists'
      });
    }

    // Check if image
    if (file.contentType === 'image/jpeg' || file.contentType === 'image/png') {
      // Read output to browser
      const readstream = gfs.createReadStream(file.filename);
      readstream.pipe(res);
    } else {
      res.status(404).json({
        err: 'Not an image'
      });
    }
  });
});


app.post('/user/new_upload',upload.single('avatar'),async function(req,res1,next){

  //just let it be
  let logged = null;
  User.findOne({_id:req.body.id},(err,item)=>{
    logged = item;
  })
  //just let it be
  let new_data = req.body;
  let date_ob = new Date();
  let v1 = new_data.voc1;
  let v2 = new_data.voc1;
  let v3 = new_data.voc1;
  let v4 = new_data.voc1;
  let v5 = new_data.voc1;
  let v6 = new_data.voc1;
  let v7 = new_data.voc1;
  let v8 = new_data.voc1;
  let v9 = new_data.voc1;
  let prediction = 1;
  let ends = v1.toString()+","+v2.toString()+","+v3.toString()+","+v4.toString()+","+v5.toString()+","+v6.toString()+","+v7.toString()+","+v8.toString()+","+v9.toString();
  let url = "https://api-cpg91-breath-analytics.herokuapp.com/predict/" + ends;
  console.log(url)
  let others = [];
  await axios.get(url)
  .then(response => {
    prediction = response.data.prediction;
  })
  .catch(error => {
    console.log(error);
  });
  Report.findOne({user_specific_id:new_data.id},(err,item)=>{
    if(err){
    }
    else{
      if(item==null){
        console.log("nothing found bro!!!");
        let new_report = new Report({
          user_specific_id:new_data.id,
          voc_report:[{
            Prediction:prediction,
            time:date_ob,
            voc1:new_data.voc1,
            voc2:new_data.voc2,
            voc3:new_data.voc3,
            voc4:new_data.voc4,
            voc5:new_data.voc5,
            voc6:new_data.voc6,
            voc7:new_data.voc7,
            voc8:new_data.voc8,
            voc9:new_data.voc9,
          }]
         })
         new_report.save();
         console.log(logged);
         let obj = {
           time : new_report.voc_report["time"],
           Prediction : new_report.voc_report["Prediction"]
         }
         others.push(obj)
         res1.render('index',{user:logged,reports:new_report.voc_report,misc:others})
      }
      else{
        console.log("in me too");
        let temp = {
            Prediction:prediction,
            time:date_ob,
            voc1:new_data.voc1,
            voc2:new_data.voc2,
            voc3:new_data.voc3,
            voc4:new_data.voc4,
            voc5:new_data.voc5,
            voc6:new_data.voc6,
            voc7:new_data.voc7,
            voc8:new_data.voc8,
            voc9:new_data.voc9,
        }
        item.voc_report.push(temp);
        console.log(item);
        
        item.voc_report.map((item)=>{
          let obj = {
            time : item["time"],
            Prediction : item["Prediction"]
          }
          others.push(obj)
        })
        Report.updateOne({user_specific_id:new_data.id}, item, function(err, res) {
          if (err) throw err;
          res1.render('index',{user:logged,reports:item.voc_report,misc:others})
        });
      }
    }

  })
})

const PORT = process.env.PORT ||3000;
 app.listen(PORT,function(){
     console.log("Server is up and running...");
 })









