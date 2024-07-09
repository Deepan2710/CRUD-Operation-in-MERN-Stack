const mongoose=require('mongoose');
const usersch =new mongoose.Schema({
         title :{
            type:String,
            required:true
         },
         author:{
            type:String,
            required:true
         },
        //  publishyear:{
        //     type:String,
        //     required:true
        //  },
},{
    timestamps:true
} );


module.exports=mongoose.model('user',usersch);