const express=require("express");
const router=express.Router();
const {userById}= require('../../middleware/user');
const {createAppointment, appointmentById,list}
= require('../../middleware/Customer/Appointment');
    const auth= require('../../middleware/auth');




router.get("/appointment/list",auth, list);

router.post("/appointment/create/:userId" ,auth,createAppointment);


// router.delete( "/appointment/:appointmentId",auth,  remove);
// router.put( "/appointment/updateAppointment/:appointmentId",auth, update);


router.param("userId",userById);
router.param("appointmentId",auth,appointmentById);


module.exports=router;