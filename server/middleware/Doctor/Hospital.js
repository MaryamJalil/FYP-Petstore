
const Hospital= require("../../models/Doctor/Hospital");
const { errorHandler } = require("../../helpers/dbErrorHandler");


exports.hospitalById=(req,res,next,id)=>{
    if(req.user.role === 'doctor'){
    Hospital.findById(id).exec((err,hospital)=>{
        if (err || !hospital){
            return res.status(400).json({
                error:"Hospital does not exist"
            });
        }
        req.hospital=hospital;
        next();
    });
}
else return res.status(401).json({error:"unauthorized user"})
}
exports.create = (req, res) => {
    if(req.user.role === 'doctor'){
      const {name} = req.body;

      const hospital = new Hospital({name:name, userId: req.user.id});
    hospital.save((err, data) => {
        if (err) {
            return res.status(400).json({
                error: errorHandler(err)
            });
        }
        res.json({ data });
    });
}
else return res.status(401).json({error:"unauthorized user"})
};
exports.read=(req,res)=>{
    if(req.user.role==='doctor' || req.user.role==='customer'){

   return res.json(req.hospital);
}
else return res.status(401).json({error:"unauthorized user"})
};

exports.update = (req, res) => {
  if(req.user.role === 'doctor'){
       Hospital.findByIdAndUpdate({_id:req.params.hospitalId, userId: req.user.id} ,
         {$set: {name:req.body.name}})

        
        .then((hospital) => {
            if (!hospital) {
              return res.status(404).send({
                message: "Hospital not found ",
              });
            }
            res.send({ message: "Hospital updated successfully!" });
          })
          .catch((err) => {
            console.log(err)
            return res.status(500).send({
              message: "Could not update hospital",
            });
          });
      }
      else return res.status(401).json({errors:[{msg:"unauthorized user}]"}]})
      
          
      };

      
exports.remove=(req,res)=>{
    if(req.user.role === 'doctor'){

    Hospital.findOneAndDelete({_id:req.params.hospitalId})
    // Hospital.findOneAndDelete(req.body.hospital)

    .then((hospital) => {
      if (!hospital) {
        return res.status(404).send({
          message: "Hospital not found ",
        });
      }
      res.send({ message: "Hospital deleted successfully!" });
    })
    .catch((err) => {
      return res.status(500).send({
        message: "Could not delete hospital",
      });
    });
}
else return res.status(401).json({errors:[{msg:"unauthorized user}]"}]})

    
};

exports.list=(req,res)=>{
  if(req.user.role==='doctor'){

  Hospital.find({userId:req.user.id}).exec((err,data)=>{
      if (err){
          return res.status(400).json({errors:[{ msg: err }]});
      }
      return res.json(data);
  });
}

else if ( req.user.role==='customer') {

Hospital.find().exec((err,data)=>{
      if (err){
          return res.status(400).json({errors:[{ msg: err }]});
      }
      return res.json(data);
  });

}
else return res.status(401).json({errors:[{msg:"unauthorized user}]"}]})
  
}