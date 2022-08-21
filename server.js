var express= require("express");
var bodyParser = require('body-parser')
var mongoose = require("mongoose");
var cors = require('cors')
const path = require("path");

const dbConfigs= require(path.join(__dirname,"./app/config/db.config"));
require('dotenv').config()

var app=express();

app.use((req,res,next)=>{
    console.log('Time ',Date.now());
    next();
})

app.use(bodyParser.json())


app.use(cors())


mongoose.connect(dbConfigs.url);
var db=mongoose.connection;

db.on("error",()=>{
    console.log("Unable to connect to DB");
})

db.once('open',()=>{
    console.log("Connection successful");
})



require(path.join(__dirname,"./app/Routes/tutorial.routes"))(app);
require(path.join(__dirname,"./app/Routes/user.routes"))(app);


app.listen(process.env.PORT,()=>{
    console.log(`your server is running on port ${process.env.PORT}`);
})
