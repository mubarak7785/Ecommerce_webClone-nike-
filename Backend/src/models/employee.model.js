const mongoose=require('mongoose');
const employeeSchema=new mongoose.Schema({
name:{type:String,required:true},
phone_no:{type:Number,required:true},
address:{type:String,required:true},
age:{type:Number,required:true},
gender:{type:String,required:false},
type:{type:String,required:false},
email:{type:String,required:true},
},{
    versionKey:false,
    timestamps:true
});
const employeeData=mongoose.model("employee",employeeSchema)
module.exports=employeeData;