const mongoose= require('mongoose');

const menuschema =new mongoose.Schema({
    name:{
        type: String,
        require:true,
    },
    price:{
        type: Number,
        require: true,
    },
    taste :{
        type: String,
        enum:['sweet','spicy','sour'],
        require: true,
    },
    is_drink:{
        type:Boolean,
        default: false
    },
    ingredients:{
        type:[String],
        default:[],
    },
    num_sales: {
        type:Number,
        default: 0,
    }
})

const menu=mongoose.model('menu',menuschema);
module.exports = menu;