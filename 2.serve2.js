const express=require('express');
const app = express();
const db = require('./db');
const person =require('./modules/person');
const menu = require('./modules/menu');
require('dotenv').config();
const passport = require('./auth');


const bodyParser = require('body-parser');
app.use(bodyParser.json());


// middleware function 
const logrequest =(req,res,next)=>{
    console.log(`${new Date().toLocaleString()} Request made to :${req.originalUrl}`)
    next(); // move on the next phase   
}
app.use(logrequest);



app.use(passport.initialize());

const localAuthMiddleware = passport.authenticate('local', { session: false});

app.get('/',localAuthMiddleware,(req, res) => {
        res.send('welcome to our hotel');
    }
);

// import the router files
const personrouter = require('./routes/personroutes');

//use the routers
app.use('/person',personrouter);

// import the menu router files
const menurouter =require('./routes/menuroute');

//use the menu routers
app.use('/menu',menurouter);

// const PORT =process.env.PORT || 2000;

// comment added chll nikal abb 

app.listen(2000,()=>{
    console.log("server bangya");
}); 
