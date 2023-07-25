const express = require("express");
const router = express.Router();


router.get("/sendOtp",(req,res)=> {
    res.json({
        message:"otp sent",
        variant:"success"
    })
})
router.get("/getOtp",(req,res)=> {
    res.json({
        message:"otp recived",
        variant:"success"
    })
})

module.exports = router