const express=require("express");
const router=express.Router();
const {userById}= require('../../middleware/user');
const {createProfile, getProfilesByHospitalId, profileById,read,remove,update,list,
  listRelated,listHospitals}= require('../../middleware/Doctor/Profile');
    const auth= require('../../middleware/auth');




router.get("/profile/:profileId",auth, read);
// router.post("/profile/create/:userId" ,auth,create,handle_images.profileImages());
router.post("/profile/create/:userId" ,auth,createProfile);
// router.post("/profile/getprofiles/:hospitalId" ,auth,getProfilesByHospitalId);
router.get("/profile/getprofiles/:hospitalId" ,auth,getProfilesByHospitalId);

// router.post("/profile/uploadPhoto/:profileId",auth,uploadProfilePhoto);

router.delete( "/profile/:profileId",auth,  remove);
router.put( "/profile/updateProfile/:profileId",auth, update);
router.get("/profiles",auth,list);
// router.post("/profiles/search",auth,listSearch);
router.get("/profiles/related/:profileId",auth,listRelated)
router.get("/profiles/hospitals",auth,listHospitals);
// router.post("/profiles/by/search",auth,listBySearch);
// router.get("/profile/photo/:profileId",auth,photo);
;



router.param("userId",userById);
router.param("profileId",auth,profileById);


module.exports=router;