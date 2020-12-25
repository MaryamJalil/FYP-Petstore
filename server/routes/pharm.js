const express=require("express");
const router=express.Router();
const {create ,pharmById,read ,update,list,remove}= require('../middleware/Pharm');
const {userById}= require('../middleware/user');
const auth= require('../middleware/auth');



router.get("/pharm/:pharmId" ,auth,read);
router.post("/pharm/create/:userId",auth,create);
router.put("/pharm/:pharmId" ,auth,update);
router.delete("/pharm/:pharmId" ,auth,remove);
router.get("/pharms" ,auth,list);





router.param("pharmId",auth,pharmById);
router.param("userId",userById);


module.exports=router;