const express=require("express");
const router=express.Router();
const {userById}= require('../../middleware/user');
const {createLostpet, lostpetById,list,remove,update,uploadLostpetPhoto
 }= require('../../middleware/Customer/Lostpet');
    const auth= require('../../middleware/auth');




router.get("/lostpet/list",auth, list);
router.post("/lostpet/create/:userId" ,auth,createLostpet);
router.post("/lostpet/uploadPhoto/:lostpetId",auth,uploadLostpetPhoto);



router.delete( "/lostpet/:lostpetId",auth,  remove);
router.put( "/lostpet/updateLostpet/:lostpetId",auth, update);




router.param("userId",userById);
router.param("lostpetId",auth,lostpetById);


module.exports=router;