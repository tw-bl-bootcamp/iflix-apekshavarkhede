const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const dbConfig = require('../serverside/config/config.js');
const mongoose = require('mongoose');
const expressValidator=require('express-validator')
require('dotenv').config();
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(expressValidator())

var port = 3000;
var server = app.listen(port ,() =>{
    console.log("server is running on port",port);
});

mongoose.connect(dbConfig.url,{
    useNewUrlParser :true,
    useUnifiedTopology:true,
}).then(() =>{
    console.log("DataBase Connect Sucessfully");
}).catch(err => {
    console.log("DataBase is Not Connected Sucessfully");
    process.exit();
})


module.exports =app;


