const express=require('express');
const app = express();
const db = require('./db');
const person =require('./modules/person');
const menu = require('./modules/menu');
require('dotenv').config();


 const bodyParser = require('body-parser');
app.use(bodyParser.json());



// import the router files
const personrouter = require('./routes/personroutes');

//use the routers
app.use('/person',personrouter);

// import the menu router files
const menurouter =require('./routes/menuroute');

//use the menu routers
app.use('/menu',menurouter);

const PORT =process.env.PORT || 2000;

 
// comment added chll nikal abb 

app.listen(PORT,()=>{
    console.log("server bangya");
});
