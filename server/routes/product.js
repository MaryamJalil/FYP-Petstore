const express=require("express");
const router=express.Router();
const {userById}= require('../middleware/user');
const {createProduct, getProductsByCategoryId, productById,read,remove,update,list,listRelated,listCategories,listBySearch,photo,
    listSearch, uploadProductPhoto}= require('../middleware/product');
    const auth= require('../middleware/auth');




router.get("/product/:productId",auth, read);
// router.post("/product/create/:userId" ,auth,create,handle_images.productImages());
router.post("/product/create/:userId" ,auth,createProduct);
// router.post("/product/getproducts/:categoryId" ,auth,getProductsByCategoryId);
router.get("/product/getproducts/:categoryId" ,auth,getProductsByCategoryId);

router.post("/product/uploadPhoto/:productId",auth,uploadProductPhoto);

router.delete( "/product/:productId",auth,  remove);
router.put( "/product/updateProduct/:productId",auth, update);
router.get("/products",auth,list);
router.post("/products/search",auth,listSearch);
router.get("/products/related/:productId",auth,listRelated)
router.get("/products/categories",auth,listCategories);
router.post("/products/by/search",auth,listBySearch);
// router.get("/product/photo/:productId",auth,photo);
;



router.param("userId",userById);
router.param("productId",auth,productById);


module.exports=router;