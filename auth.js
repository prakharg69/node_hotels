const passport=require('passport');
const LocalStrategy =require('passport-local').Strategy;

const person =require('./modules/person');

passport.use(new LocalStrategy(async (USERNAME,password,done)=>{
    // authentication logic here
    try{
        console.log('recieved candentials: ',USERNAME,password);
        const user =await  person.findOne({username: USERNAME});
        if(!user){
            return done(null ,false,{message: 'Incorrect username.'});
        }
        const ispasswordMatch= user.comparePassword(password);
        
        if(ispasswordMatch){
            return done(null,user);
        }
        else{
            return done(null,false,{message: 'incorrect password. '});
        }
    }
    catch(err){
        return done(err);
    }
}));

module.exports =passport;
