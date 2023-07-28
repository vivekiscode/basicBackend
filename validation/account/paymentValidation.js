const validateOnCreate = async(req,res,next) => {
    if(!req.body?.amount){
        
      return  res.status(400).json({
            message: "Amount Required",
            variant: "error"
        })
        }

    next();
}

const validateOnUpdate = async(req,res,next) => {


    next();
}

module.exports = {validateOnCreate, validateOnUpdate}