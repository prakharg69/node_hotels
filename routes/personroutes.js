const express=require('express');
const router =express.Router();
const person =require('./../modules/person');


router.post('/',async(req,res)=>{
    try{
        const data = req.body // Assuming the request body contains the person data 
        
        // create a new person using using the mongoose model
        const newPerson =new person(data);

        // save the new person to the database
        const savee =await newPerson.save();
        console.log('data saved');
        res.status(200).json(savee);
    }
    catch(err){
        console.log(err);
        res.status(500).json({error:'Internal server error'}); 
        
    }
})

router.get('/',async(req,res)=>{
    try{
        const data = await person.find();
        console.log('data fetched');
        res.status(200).json(data);
    }
    catch(err){
        console.log(err);
        res.status(500).json({error: 'Interner server error hai lawde'});
    }
})

router.get('/:workType',async(req,res)=>{
    try{
        const workType =req.params.workType; // extract the work type from the URL parameter.
        if(workType =='chef' ||workType =='manager'||workType =='waiter'){
            const responsed =await person.find({work: workType});
            console.log('respond milgya ');
            res.status(200).json(responsed);
        }else{
            res.status(404).json({error:'invalid lawde'});
        }
    }catch(err){
        console.log(err);
        res.status(500).json({error: 'Interner server error hai lawde'});
    }
})


router.put('/:id',async(req,res)=>{
    try{
        const id=req.params.id;
        const updateddata=req.body;
        const respond =await person.findByIdAndUpdate(id,updateddata,{
            new: true, // return the updated document 
            runValidators: true, // run mongoose validation
        })
        if(!respond){
            return res.status(404).json({error:'person nahi mila bhai '});
        }
        console.log("data updated");
        res.status(200).json(respond);
        

    }catch(err){
    console.log(err);
    res.status(500).json({error: 'Interner server error hai lawde'});
    }
})
router.delete('/:id',async(req,res)=>{
    try{
        const id =req.params.id;
        const respon =await person.findByIdAndDelete(id,{
            new: true, // return the updated document 
            runValidators: true, // run mongoose validation
        })
        if(!respon){
            return res.status(404).json({error:'person nahi mila'});
        }
        console.log('data deleted');
        res.status(200).json(respon);
        
    }
    catch(err){
        console.log(err);
        res.status(500).json({error: 'Interner server error hai lawde'});    
    }
})
module.exports =router;