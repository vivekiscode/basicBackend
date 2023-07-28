const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const PaymentSchema = new Schema({
   amount:{
    type:Number,
    required:true
   },
   note:{
    type:String,
    default:""
   },
   date:{
    type:Date,
    default: Date.now
   }
});

module.exports = Payment = mongoose.model("Payment",PaymentSchema)