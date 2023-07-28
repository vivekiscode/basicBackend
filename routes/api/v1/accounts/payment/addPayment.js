const express = require("express");
const Payment = require("../../../../../Models/Accounts/Payment");
const router = express.Router();

const {validateOnCreate, validateOnUpdate} = require("../../../../../validation/account/paymentValidation")


// @type POST
// @route /api/v1/accounts/payment/addPayment
// @des Create New Payment
// @access Public
router.post("/",validateOnCreate, async(req,res)=>{

const paymentObj = await getPaymentObj(req,"create")

   try{

    await new Payment(paymentObj)
    .save();
    

    res.status(201).json({
        message: "Payment Added",
        variant: "success"
    })

   } catch(error) {
    console.log(error)
    res.status(500).json({
        message: "Internal Server error",
        variant: "error"
    }) 
   }

})

async function getPaymentObj(req,type){

    let newPayment = {}
    if(req.body.amount){
        newPayment.amount = req.body.amount
    }
    if(req.body.note){
        newPayment.note = req.body.note
    }
    if(req.body.date){
        newPayment.date = req.body.date
    }

    return newPayment
}

module.exports = router;