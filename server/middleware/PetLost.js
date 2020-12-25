
const PetLost= require("../models/PetLost");
const { errorHandler } = require("../helpers/dbErrorHandler");
var moment = require('moment');


exports.petlostById=(req,res,next,id)=>{
    if(req.user.role === 'customer'){
    PetLost.findById(id).exec((err,petlost)=>{
        if (err || !petlost){
            return res.status(400).json({
                error:"petlost information does not exist"
            });
        }
        req.petlost=petlost;
        next();
    });
}
else return res.status(401).json({error:"unauthorized user"})
}

exports.create = (req, res) => {

        if(req.user.role === 'customer'){
    const {name,description,age,breed,Location,phone } = req.body;

  if (!req.body.name || !req.body.description || !req.body.age|| 
    !req.body.breed|| !req.body.Location || !req.body.phone) {
    return res.status(400).send({
      message: "Required field can not be empty",
    });
  }

  const petlost= new PetLost({
    name: req.body.name,
    description: req.body.description,
    age:req.body.age,
    breed:req.body.breed,
    Location:req.body.Location,
    phone:req.body.phone,


  });

  /**
   * Save hospital to database
   */
 petlost
    .save()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while creating the information of petlost.",
      });
    });
}

else return res.status(401).json({errors:[{msg:"unauthorized user}]"}]})
};
exports.read=(req,res)=>{
    if(req.user.role==='doctor' || req.user.role==='customer'||req.user.role==='admin'||
    req.user.role==='pharmacist'||req.user.role==='seller'
    ){
        PetLost.findById(req.params.petlostId, function (err, petlost) {
            // console.log(req.params.productId,)

        if (err) return next(err);
        res.send(petlost);
    })
    }
    else return res.status(401).json({errors:[{msg:"unauthorized user}]"}]})
  };

exports.update = (req, res) => 
{

        if(req.user.role === 'customer'){
    if (!req.body.name || !req.body.description|| !req.body.age || !req.body.breed
        || !req.body.Location || !req.body.phone) {
      res.status(400).send({
        message: "required fields cannot be empty",
      });
    }
    PetLost.findByIdAndUpdate(req.params.petlostId, req.body, { new: true })
      .then((petlost) => {
        if (!petlost) {
          return res.status(404).send({
            message: "no petlost information found",
          });
        }
        res.status(200).send(petlost);
      })
      .catch((err) => {
        return res.status(404).send({
          message: "error while updating the information of petlost",
        });
      });
    }
    else return res.status(401).json({errors:[{msg:"unauthorized user}]"}]})
  };


exports.remove=async(req,res)=>{
    if(req.user.role === 'customer'){
        try{
            let petlost=await petlost.findById(req.params.petlostId)
            if(!petlost){
                return res.status(404).json({msg:'petlost not found'})
            }
            await petlost.findByIdAndRemove(req.params.petlostId)
            res.send('petlost information removed')
            
    
        }catch(err){
            console.error(err.message)
            res.status(500).send('Server Error')
    
        }
    
}
else return res.status(401).json({errors:[{msg:"unauthorized user}]"}]})
    
};
exports.list=(req,res)=>{
    if(req.user.role==='doctor' || req.user.role==='customer'||
    req.user.role==='pharmacist' ||req.user.role==='admin'||req.user.role==='seller'){

    PetLost.find().exec((err,data)=>{
        if (err){
            return res.status(400).json({
                error:errorHandler(err)
            });
        }
        res.json(data);
    });
}
else return res.status(401).json({errors:[{msg:"unauthorized user}]"}]})
    
}