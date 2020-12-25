const express=require("express");
const router=express.Router();
const {create ,hospitalById,read ,update,list,remove}= require('../../middleware/Doctor/Hospital');
const {userById}= require('../../middleware/user');
const auth= require('../../middleware/auth');



router.get("/hospital/:hospitalId" ,auth,read);
router.post("/hospital/create/:userId",auth,create);
router.put("/hospital/:hospitalId" ,auth,update);
router.delete("/hospital/:hospitalId" ,auth,remove);
router.get("/hospitals" ,auth,list);





router.param("hospitalId",auth,hospitalById);
router.param("userId",userById);


module.exports=router;