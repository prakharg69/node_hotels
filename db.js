const mongoose =require('mongoose');
require('dotenv').config();

// define the mongodb connection URL
const mongoURL='mongodb+srv://Prakharbackend:Vijaya1171@cluster0.yvh66.mongodb.net/';
// const mongoURL =process.env.DB_URL;

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