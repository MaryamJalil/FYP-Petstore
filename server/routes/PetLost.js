const express=require("express");
const router=express.Router();
const {read,create,update,remove,list}= require('../middleware/PetLost');
const {userById}= require('../middleware/user');
const auth= require('../middleware/auth');




router.get("/petlost/:petlostId" ,auth,read);
router.post("/petlost/create/:userId",auth,create);
router.put("/petlost/:petlostId/:userId" ,auth,update);
router.delete("/petlost/:petlostId/:userId" ,auth,remove);
router.get("/petlosts" ,auth,list);





router.param("petlostId",auth);
router.param("userId",userById);


module.exports=router;

