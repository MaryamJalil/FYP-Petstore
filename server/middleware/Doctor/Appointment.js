
const Appointment= require("../../models/Doctor/Appointment");
const { errorHandler } = require("../../helpers/dbErrorHandler");
var moment = require('moment');


exports.appointmentById=(req,res,next,id)=>{
    if(req.user.role === 'doctor'){
    Appointment.findById(id).exec((err,appointment)=>{
        if (err || !appointment){
            return res.status(400).json({
                error:"appointment does not exist"
            });
        }
        req.appointment=appointment;
        next();
    });
}
else return res.status(401).json({error:"unauthorized user"})
}

exports.create = (req, res) => {

        if(req.user.role === 'doctor'){
    const {doctor,hospital,time,specialization} = req.body;

  if (!req.body.doctor || !req.body.time || !req.body.isAvailable|| 
    !req.body.patient ) {
    return res.status(400).send({
      message: "Required field can not be empty",
    });
  }

  const hospital = new Hospital({
    doctor: req.body.doctor,
    time:req.body.time,
    isAvailable:req.body.isAvailable,
    patient:req.body.patient,


  });

  /**
   * Save appointment to database
   */
 appointment
    .save()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while creating the Appointment.",
      });
    });
}

else return res.status(401).json({errors:[{msg:"unauthorized user}]"}]})
};
exports.read=(req,res)=>{
    if(req.user.role==='doctor' || req.user.role==='customer'||req.user.role==='admin'){
        Appointment.findById(req.params.appointmentId, function (err, appointment) {
            // console.log(req.params.productId,)

        if (err) return next(err);
        res.send(appointment);
    })
    }
    else return res.status(401).json({errors:[{msg:"unauthorized user}]"}]})
  };

exports.update = (req, res) => 
{

        if(req.user.role === 'doctor'){
    if (!req.body.doctor || !req.body.time|| !req.body.isAvailable || !req.body.patient ) {
      res.status(400).send({
        message: "required fields cannot be empty",
      });
    }
    Appointment.findByIdAndUpdate(req.params.appointmentId, req.body, { new: true })
      .then((appointment) => {
        if (!appointment) {
          return res.status(404).send({
            message: "no appointment found",
          });
        }
        res.status(200).send(appointment);
      })
      .catch((err) => {
        return res.status(404).send({
          message: "error while updating the appointment",
        });
      });
    }
    else return res.status(401).json({errors:[{msg:"unauthorized user}]"}]})
  };


exports.remove=async(req,res)=>{
    if(req.user.role === 'doctor'){
        try{
            let appointment=await Appointment.findById(req.params.appointmentId)
            if(!appointment){
                return res.status(404).json({msg:'Appointment not found'})
            }
            await Appointment.findByIdAndRemove(req.params.appointmentId)
            res.send('Appointment removed')
            
    
        }catch(err){
            console.error(err.message)
            res.status(500).send('Server Error')
    
        }
    
}
else return res.status(401).json({errors:[{msg:"unauthorized user}]"}]})
    
};
exports.list=(req,res)=>{
    if(req.user.role==='doctor' || req.user.role==='customer'){

    Appointment.find().exec((err,data)=>{
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