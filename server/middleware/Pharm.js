
const Pharm= require("../models/Pharm");
const { errorHandler } = require("../helpers/dbErrorHandler");


exports.pharmById=(req,res,next,id)=>{
    if(req.user.role === 'pharmacist'){
    Pharm.findById(id).exec((err,pharm)=>{
        if (err || !pharm){
            return res.status(400).json({
                error:"Category of pharmacy does not exist"
            });
        }
        req.pharm=pharm;
        next();
    });
}
else return res.status(401).json({error:"unauthorized user"})
}
exports.create = (req, res) => {
    if(req.user.role === 'pharmacist'){
      const {name} = req.body;

      const pharm = new Pharm({name:name, userId: req.user.id});
    pharm.save((err, data) => {
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
    if(req.user.role==='pharmacist' || req.user.role==='customer'){

   return res.json(req.pharm);
}
else return res.status(401).json({error:"unauthorized user"})
};

exports.update = (req, res) => {
  if(req.user.role === 'pharmacist'){
       Pharm.findByIdAndUpdate({_id:req.params.pharmId, userId: req.user.id} , {$set: {name:req.body.name}})

        
        .then((pharm) => {
            if (!pharm) {
              return res.status(404).send({
                message: "Category of pharmacy not found ",
              });
            }
            res.send({ message: "Category of pharmacy updated successfully!" });
          })
          .catch((err) => {
            console.log(err)
            return res.status(500).send({
              message: "Could not update Category of pharmacy",
            });
          });
      }
      else return res.status(401).json({errors:[{msg:"unauthorized user}]"}]})
      
          
      };

      
exports.remove=(req,res)=>{
    if(req.user.role === 'pharmacist'){

    Pharm.findOneAndDelete({_id:req.params.pharmId})
    // Pharm.findOneAndDelete(req.body.pharm)

    .then((pharm) => {
      if (!pharm) {
        return res.status(404).send({
          message: "Category of pharmacy not found ",
        });
      }
      res.send({ message: "Category of pharmacy deleted successfully!" });
    })
    .catch((err) => {
      return res.status(500).send({
        message: "Could not delete Category of pharmacy",
      });
    });
}
else return res.status(401).json({errors:[{msg:"unauthorized user}]"}]})

    
};
exports.list=(req,res)=>{
  if(req.user.role==='pharmacist'){

  Pharm.find({userId:req.user.id}).exec((err,data)=>{
      if (err){
          return res.status(400).json({errors:[{ msg: err }]});
      }
      return res.json(data);
  });
}

else if ( req.user.role==='customer') {

Pharm.find().exec((err,data)=>{
      if (err){
          return res.status(400).json({errors:[{ msg: err }]});
      }
      return res.json(data);
  });

}
else return res.status(401).json({errors:[{msg:"unauthorized user}]"}]})
  
}