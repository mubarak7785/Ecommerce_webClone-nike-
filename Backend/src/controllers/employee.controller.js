const express=require('express')
const router=express.Router();
const Bagt=require('../models/employee.model')
router.post("",async(req,res)=>{
    try {
        const bagitem=await Bagt.create(req.body)
        return res.status(200).send(bagitem)
    } catch (error) {
        return res.status(500).send(error.message);
    }
})
router.get("",async(req,res)=>{
    try {
        const userid=req.query.id;
        const bagitems=await Bagt.find({user_id:userid});
        return res.status(200).send(bagitems)
    } catch (error) {
        return res.status(500).send(error.message);
    }
})
router.delete("/:id",async(req,res)=>{
    try {
        const delitem=await Bagt.findByIdAndDelete(req.params.id);
        return res.status(200).send(delitem)
    } catch (error) {
        return res.status(500).send(error.message)
    }
})
module.exports=router;