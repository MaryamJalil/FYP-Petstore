const express=require("express");
const router=express.Router();
const {userById}= require('../middleware/user');
const {createPharmacy, getPharmacyByPharmId , pharmacyById,read,remove,update,list,listRelated,
    listPharms,listBySearch,photo,
    listSearch, uploadPharmacyPhoto}= require('../middleware/Pharmacy');
    const auth= require('../middleware/auth');




router.get("/pharmacy/:pharmacyId",auth, read);
// router.post("/pharmacy/create/:userId" ,auth,create,handle_images.pharmacyImages());
router.post("/pharmacy/create/:userId" ,auth,createPharmacy);
router.get("/pharmacy/getpharmacys/:pharmId" ,auth,getPharmacyByPharmId );
router.post("/pharmacy/uploadPhoto/:pharmacyId",auth,uploadPharmacyPhoto);

router.delete( "/pharmacy/:pharmacyId",auth,  remove);
router.put( "/pharmacy/updatePharmacy/:pharmacyId",auth, update);
router.get("/pharmacys",auth,list);
router.post("/pharmacys/search",auth,listSearch);
router.get("/pharmacys/related/:pharmacyId",auth,listRelated)
router.get("/pharmacys/categories",auth,listPharms);
router.post("/pharmacys/by/search",auth,listBySearch);
// router.get("/pharmacy/photo/:pharmacyId",auth,photo);
;



router.param("userId",userById);
router.param("pharmacyId",auth,pharmacyById);


module.exports=router;