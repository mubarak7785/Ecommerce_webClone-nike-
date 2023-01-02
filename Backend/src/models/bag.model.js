const mongoose=require('mongoose');
const bagSchema=new mongoose.Schema({
type:{type:String,required:true},
imgUrl:{type:String,required:true},
name:{type:String,required:true},
brand:{type:String,required:false},
category:{type:String,required:true},
color:{type:String,required:true},
Price:{type:Number,required:true},
gender:{type:String,required:false},
user_id:{type:String,required:true},
size:[{type:String,required:false}]
},{
    versionKey:false,
    timestamps:true
});
const Bag=mongoose.model("nikebag",bagSchema)
module.exports=Bag;