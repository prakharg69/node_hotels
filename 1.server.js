var fs= require('fs');
var os =require('os');
var _= require('lodash');
var user =os.userInfo();
console.log(user);
console.log(user.username);
fs.appendFile('1.1new.txt','hii '+user.username,()=>{console.log('file is created');});






const mongoose=require('mongoose');

// define the mongodb connection url;
const mongoURL ='mongodb://localhost:27017/hotels';

mongoose.connect(mongoURL);

const db=mongoose.connection;

db.on('connected',() => {
    console.log('connected to server bhai ');
})
db.on('error', (err) => {
    console.error('Connection error:', err);
});
db.on('disconnected',()=>{
    console.log('mongodb band hogya ');
});
module.exports =db;