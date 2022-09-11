const express = require("express");
const mongoose = require('mongoose');
const cors = require('cors');
mongoose.connect("mongodb+srv://Samuel:12345@cluster0.kx6mxxc.mongodb.net/?retryWrites=true&w=majority");

var Schema = mongoose.Schema;
const schem = new Schema({
  imageUrl:{type: String , required:true},
  imgsrc:{type:String, required:true},
  movieName:{type: String , required:true},
  movieDescription:{type:String, required:true},
  moviePrice:{type: String , required:true},
  movieDiscount:{type:String, required:true},
  movieRating:{type: String , required:true}
})

const schemname = new Schema({
    username:{type: String , required:true},
    password:{type:String, required:true},
  })






  const users  =  mongoose.model("users",schemname) ;

const movies  =  mongoose.model("Movies",schem) ;

const app = express();
const port = process.env.PORT || 3000 ;
app.use(cors());
app.use(express.json());


app.get('/',(req,res)=>{

movies.find().then((data)=>{

res.send(data)

})


})




app.post('/register',(req,res)=>{
  var username = req.body.username;
  var password = req.body.password;
  var data = {username ,password};

  var sendToDB = new users(data);

  sendToDB.save();

})
    

app.post('/login',(req,res)=>{
    var username = req.body.username;
    var password = req.body.password;
    var data = {username,password};
 users.findOne(data).then(d=>{
     res.json({data});
     console.log(d)
    })


  })
   






app.listen(port , console.log("app is running on port 3000"))