const jwt =require('jsonwebtoken');
const jwtAuthMiddleware = (req,res,next)=>{
    // first check request header has authorize or not 
    const authorization = req.headers.authorization
    if(!authorization) return res.status(401).json({error: 'ivalid token'});


    // extract the jwt token from the request headers
    const token = req.headers.authorization.split(' ')[1];
    
    try{
        // Verify the JWT token
        const decoded= jwt.verify(token,process.env.JWT_SECRET);
        //Attach user information to the request object
        req.user =decoded;
        // Proceed to the next middleware or route handler
        next();
    }
    catch(err){
        console.log(err);
        res.status(401).json({error: 'Invalid token'});
    }
}

const generateToken =(userdata) =>{
    return jwt.sign(userdata,process.env.JWT_SECRET,{expiresIn:999999999});
}


module.exports ={jwtAuthMiddleware ,generateToken}