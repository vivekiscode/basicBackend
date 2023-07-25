const express = require("express");
const router = express.Router();


router.get("/sendOtp",(req,res)=> {
    res.json({
        message:"otp sent",
        variant:"success"
    })
})

module.exports = router