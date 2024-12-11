const mongoose =require('mongoose');

// define the mongodb connection URL
const mongoURL='mongodb://127.0.0.1:27017/hostel'

mongoose.connect(mongoURL);

// get the default connection 
// Mongoose maintains a default connection object representing the mongoDB connection 

const db = mongoose.connection;

//define event listeners for database connection

db.on('connected',()=>{
    console.log("connect hoga lawde ");
})

db.on('disconnected',()=>{
    console.log("disconnect hoga lawde ");
})

db.on('error',(error)=>{
    console.log( 'error hogya lawde');
})

module.exports=db;