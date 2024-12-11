const express =require('express');
const router=express.Router();
const menu=require('./../modules/menu');

router.post('/',async(req,res)=>{
    try{
        const dataa=req.body
        const newmenu =new menu(dataa)
        const saveee=await newmenu.save();
        console.log('data saved');
        res.status(200).json(saveee);

    }catch(err){
        console.log(err);
        res.status(500).json({error:'Internal server error'}); 
    }
})
router.get('/',async(req,res)=>{
    try{
        const data =await menu.find()
        console.log('data fetched');
        res.status(200).json(data);
        
    }catch(err){
        console.log(err);
        res.status(500).json({error: 'Interner server error hai lawde'});
    }
})
router.get('/:tastee',async(req,res)=>{
    try{
        const tastee =req.params.tastee; // extract the work type from the URL parameter.
        if(tastee =='sweet' ||tastee =='sour'||tastee =='spicy'){
            const responsed =await menu.find({taste: tastee});
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

module.exports=router;