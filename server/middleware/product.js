
const formidable = require("formidable");
const _ = require("lodash");
const fs = require("fs");
const multer = require('multer')
const Product = require("../models/product");
const { errorHandler } = require("../helpers/dbErrorHandler");
const path = require('path')

exports.productById=(req,res,next,id)=>{
    if(req.user.role === 'seller'){
    Product.findById(id).exec((err,product)=>{
        if (err || !product){
            return res.status(400).json({
                error:"Product not found"
            });
        }
        req.product=product;
        next();
    });
}
else return res.status(401).json({errors:[{msg:"unauthorized user}]"}]})
};

exports.read = function (req, res) {
        if(req.user.role==='seller' || req.user.role==='customer'){

    Product.findById(req.params.productId, function (err, product) {
            // console.log(req.params.productId,)

        if (err) return next(err);
        res.send(product);
    })
    }
    else return res.status(401).json({errors:[{msg:"unauthorized user}]"}]})
};

;

const storageEngine = multer.diskStorage({
    destination: './public/uploads/',
    filename: function (req, file, fn) {
      fn(null, req.params.productId + path.extname(file.originalname)); //+'-'+file.fieldname
    }
  });
const upload = multer({

    storage: storageEngine,
    limits: { fileSize: 200000 },
    fileFilter: function (req, file, callback) {
  
      validateFile(file, callback);
    }
  }).single('photo');
  var validateFile = function (file, cb) {
    allowedFileTypes = /jpeg|jpg|png|gif/;
    const extension = allowedFileTypes.test(path.extname(file.originalname).toLowerCase());
    const mimeType = allowedFileTypes.test(file.mimetype);
    if (extension && mimeType) {
      return cb(null, true);
    } else {
      cb("Invalid file type. Only JPEG, PNG and GIF file are allowed.")
    }
  }

  exports.uploadProductPhoto = (req, res) => {
    console.log(req.body)
       if(req.user.role==='seller' ){
        upload(req, res, async (error) => {
            if (error) {
              let msg = null
              if (error.message)
                msg = error.message
              else
                msg = error
                console.log(msg)
              // return res.status(400).json({ errors: [{ msg: msg }] });
            } else {
              if (req.file == undefined) {
        
                return res.status(404).json({ errors: [{ msg: 'Image does not exist' }] });
              } else {             /**
                 * Create new record in mongoDB
                 */
                var fullPath = "uploads/" + req.file.filename;


                try {
                    console.log(req.params)
                    let product =await Product.findByIdAndUpdate(req.params.productId, {$set:{photo: fullPath}}, {new:true});
                    console.log(product)          
        
                  return res.status(200).json({ msg: "Image uploaded successfully" })
                }
                catch (err) {
                  // return res.status(404).json({ errors: [{ msg: 'Image could not be uploaded' }] })
                  console.log("image could not upload")
                }
        
              }
            }
          })




    if (!req.files) {
      return res.status(400).json({ message: "Please upload an image" });
    }
  
    // const images_url = req.files.map(image => image.path);
  
    // create new product after being validated and sanitized
 
}
    else return res.status(401).json({errors:[{msg:"unauthorized user}]"}]})
 
  };




    
exports.createProduct = (req, res) => {
  console.log(req.body)
     if(req.user.role==='seller' ){


     
              try {
                  let newProduct = new Product({
                      userId: req.user.id,
                      name: req.body.name,
                      description: req.body.description,
                      price: req.body.price,
                      category: req.body.category,
                      quantity: req.body.quantity,
                      shipping: req.body.shipping,

                    });
                    
                  
                    newProduct.save(function (err, product) {
                      if (err) {
                          console.log(err)
                       return res.status(400).json(
                          { errors: [{ msg: "Could Not Add Product" }] });
                      } else {
                        return res.status(200).json(product);
                      }
                      
                    });
              }
              catch (err) {
                return res.status(404).json({ errors: [{ msg: 'Image could not be uploaded' }] })
              }
      
            }

};



  
  // handle GET request at /api/product/:id to get details for a specific product
  exports.productDetails = (req, res) => {
    Product.findById(req.params.id)
      .populate("category")
      .populate("seller")
      .exec(function (err, result) {
        if (err) {
          res.status(404).json({ message: "Not Found" });
        } else {
          res.json(result);
        }
      });
  };
  
  
exports.remove=(req,res)=>{
    if(req.user.role === 'seller'){

    Product.findOneAndDelete({_id:req.params.productId})
    // Category.findOneAndDelete(req.body.category)

    .then((product) => {
      if (!product) {

        return res.status(404).json({ msg: "Product not found" })
     
      }
      res.send({ message: "product deleted successfully!" });
    })
    .catch((err) => {

        return res.status(500).json({ msg: "Could not delete product"})

    });
}
else return res.status(401).json({errors:[{msg:"unauthorized user}]"}]})

    
};

exports.update = (req, res) => {
    if(req.user.role === 'seller'){
      console.log(req.body)
        Product.findByIdAndUpdate(req.params.productId ,
             {$set: {name:req.body.name, description:req.body.description, price:req.body.price,
            quantity:req.body.quantity,category:req.body.category,shipping:req.body.shipping}},
            {new:true})

          
          .then((product) => {
              if (!product) {

                return res.status(404).send({
                  message: "product not found ",
                });
              }
              return res.status(200).json(product);
            })
            .catch((err) => {
              console.log(err)
              return res.status(500).send({
                message: "Could not update product",
              });
            });
        }
        else return res.status(401).json({errors:[{msg:"unauthorized user}]"}]})
        
            
        };
    


/**
 * sell / arrival
 * by sell = /products?sortBy=sold&order=desc&limit=4
 * by arrival = /products?sortBy=createdAt&order=desc&limit=4
 * if no params are sent, then all products are returned
 */
exports.getProductsByCategoryId = (req, res) => {
    if(req.user.role==='seller' || req.user.role==='customer'){
    
    Product.find({category:req.params.categoryId})
    .populate('category','name')
    
        .exec((err, products) => {
            if (err) {
                return res.status(400).json({
                    error: "Products not found"
                });
            }
            return res.json(products);
        });
    }
    else return res.status(401).json({errors:[{msg:"unauthorized user}]"}]})
};


exports.list = (req, res) => {
    if(req.user.role==='seller' || req.user.role==='customer'){
    let order = req.query.order ? req.query.order : "asc";
    let sortBy = req.query.sortBy ? req.query.sortBy : "_id";
    let limit = req.query.limit ? parseInt(req.query.limit) : 6;

    Product.find()
        .select("-photo")
        .populate("category")
        .sort([[sortBy, order]])
        .limit(limit)
        .exec((err, products) => {
            if (err) {
                return res.status(400).json({
                    error: "Products not found"
                });
            }
            res.json(products);
        });
    }
    else return res.status(401).json({errors:[{msg:"unauthorized user}]"}]})
};

/**
 * it will find the products based on the req product category
 * other products that has the same category, will be returned
 */

exports.listRelated=(req,res)=>{
    if(req.user.role==='seller' || req.user.role==='customer'){
    let limit=req.query.limit ? parseInt(req.query.limit):6;
    Product.find({_id:{$ne:req.product},category:req.product.category})
    .limit(limit)
    .populate('category','_id name')
    .exec((err,products)=>{
        if(err){
            return res.status(400).json({
                error:"Product not found"
            });
        }
        res.json(products);
    });
}
else return res.status(401).json({errors:[{msg:"unauthorized user}]"}]})
};

exports.listCategories = (req, res) => {
    if(req.user.role==='seller' || req.user.role==='customer'){

    Product.distinct("category", {}, (err, categories) => {
        if (err) {
            return res.status(400).json({
                error: "Categories not found"
            });
        }
        res.json(categories);
    });
}
else return res.status(401).json({error:"unauthorized user"})
};
/**
 * list products by search
 * we will implement product search in react frontend
 * we will show categories in checkbox and price range in radio buttons
 * as the user clicks on those checkbox and radio buttons
 * we will make api request and show the products to users based on what he wants
 */

exports.listBySearch = (req, res) => {
    if(req.user.role==='seller' || req.user.role==='customer'){
    let order = req.body.order ? req.body.order : "desc";
    let sortBy = req.body.sortBy ? req.body.sortBy : "_id";
    let limit = req.body.limit ? parseInt(req.body.limit) : 100;
    let skip = parseInt(req.body.skip);
    let findArgs = {};

    // console.log(order, sortBy, limit, skip, req.body.filters);
    // console.log("findArgs", findArgs);

    for (let key in req.body.filters) {
        if (req.body.filters[key].length > 0) {
            if (key === "price") {
                // gte -  greater than price [0-10]
                // lte - less than
                findArgs[key] = {
                    $gte: req.body.filters[key][0],
                    $lte: req.body.filters[key][1]
                };
            } else {
                //that will be for categories
                findArgs[key] = req.body.filters[key];
            }
        }
    }
    Product.find(findArgs)
    .select("-photo")
    .populate("category")
    .sort([[sortBy, order]])
    .skip(skip)
    .limit(limit)
    .exec((err, data) => {
        if (err) {
            return res.status(400).json({
                error: "Products not found"
            });
        }
        res.json({
            size: data.length,
            data
        });
    });
}
else return res.status(401).json({errors:[{msg:"unauthorized user}]"}]})
};
exports.photo=(req,res,next)=>{
    if(req.user.role==='seller' ){
    if(req.product.photo.data){
        res.set("Content-Type",req.product.photo.contentType);
        return res.send(req.product.photo.data);
    }
    next();
}
else return res.status(401).json({error:"unauthorized user"})
};
exports.listSearch = (req, res) => {
    if(req.user.role==='seller' || req.user.role==='customer'){

    // create query object to hold search value and category value
    const query = {};
    // assign search value to query.name
    if (req.query.search) {
        query.name = { $regex: req.query.search, $options: "i" };
        // assigne category value to query.category
        if (req.query.category && req.query.category != "All") {
            query.category = req.query.category;
        }
        // find the product based on query object with 2 properties
        // search and category
        Product.find(query, (err, products) => {
            if (err) {
                return res.status(400).json({
                    error: errorHandler(err)
                });
            }
            res.json(products);
        }).select("-photo");
    }
}
else return res.status(401).json({errors:[{msg:"unauthorized user}]"}]})
};