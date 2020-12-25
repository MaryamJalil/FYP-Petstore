

const Appointment= require("../../models/Customer/Appointment");


exports.appointmentById=(req,res,next,id)=>{
    if(req.user.role === 'customer'){
    Appointment.findById(id).exec((err,appointment)=>{
        if (err || !appointment){
            return res.status(400).json({
                error:"Appointment not found"
            });
        }
        req.appointment=appointment;
        next();
    });
}
else return res.status(401).json({errors:[{msg:"unauthorized user}]"}]})
};

exports.list = function (req, res) {
        if(req.user.role==='customer' || req.user.role==='doctor'){

    Appointment.findById(req.params.appointmentId, function (err, appointment) {
            // console.log(req.params.appointmentId,)

        if (err) return next(err);
        res.send(appointment);
    })
    }
    else return res.status(401).json({errors:[{msg:"unauthorized user}]"}]})
};

  
exports.createAppointment= (req, res) => {
  console.log(req.body)
     if(req.user.role==='customer' ){


     
              try {
                  let newAppointment= new Appointment({
                      userId: req.user.id,
                      name: req.body.name,
                      description: req.body.description,
                      age: req.body.age,
                      breed: req.body.breed,
                      contact: req.body.contact,

                    });
                    
                  
                    newAppointment.save(function (err, appointment) {

                      if (err) {
                          console.log(err)
                       return res.status(400).json(
                          { errors: [{ msg: "Could Not Add Appointment" }] });
                      } else {
                        return res.status(200).json(appointment);
                      }
                      
                    });
              }
              catch (err) {
                return res.status(404).json({ errors: [{ msg: 'Image could not be uploaded' }] })
              }
      
            }

};

  
// exports.remove=(req,res)=>{
//     if(req.user.role === 'customer'){

//     Appointment.findOneAndDelete({_id:req.params.appointmentId})
//     // Category.findOneAndDelete(req.body.category)

//     .then((appointment) => {
//       if (!appointment) {

//         return res.status(404).json({ msg: "Appointmentnot found" })
     
//       }
//       res.send({ message: "appointment deleted successfully!" });
//     })
//     .catch((err) => {

//         return res.status(500).json({ msg: "Could not delete appointment"})

//     });
// }
// else return res.status(401).json({errors:[{msg:"unauthorized user}]"}]})

    
// };

// exports.update = (req, res) => {
//     if(req.user.role === 'customer'){
//       console.log(req.body)
//         Appointment.findByIdAndUpdate(req.params.appointmentId ,
//              {$set: {name:req.body.name, description:req.body.description, age:req.body.age,
//             breed:req.body.breed,contact:req.body.contact}},
//             {new:true})

          
//           .then((appointment) => {
//               if (!appointment) {

//                 return res.status(404).send({
//                   message: "appointment not found ",
//                 });
//               }
//               return res.status(200).json(appointment);
//             })
//             .catch((err) => {
//               console.log(err)
//               return res.status(500).send({
//                 message: "Could not update appointment",
//               });
//             });
//         }
//         else return res.status(401).json({errors:[{msg:"unauthorized user}]"}]})
        
            
//         };

