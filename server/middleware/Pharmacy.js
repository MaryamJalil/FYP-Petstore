
const formidable = require("formidable");
const _ = require("lodash");
const fs = require("fs");
const multer = require('multer')
const Pharmacy = require("../models/Pharmacy");
const { errorHandler } = require("../helpers/dbErrorHandler");
const path = require('path')

exports.pharmacyById=(req,res,next,id)=>{
    if(req.user.role === 'pharmacist'){
    Pharmacy.findById(id).exec((err,pharmacy)=>{
        if (err || !pharmacy){
            return res.status(400).json({
                error:"Pharmacy not found"
            });
        }
        req.pharmacy=pharmacy;
        next();
    });
}
else return res.status(401).json({errors:[{msg:"unauthorized user}]"}]})
};

exports.read = function (req, res) {
        if(req.user.role==='pharmacist' || req.user.role==='customer'){

    Pharmacy.findById(req.params.pharmacyId, function (err, pharmacy) {
            // console.log(req.params.pharmacyId,)

        if (err) return next(err);
        res.send(pharmacy);
    })
    }
    else return res.status(401).json({errors:[{msg:"unauthorized user}]"}]})
};

;

const storageEngine = multer.diskStorage({
    destination: './public/uploads/',
    filename: function (req, file, fn) {
      fn(null, req.params.pharmacyId + path.extname(file.originalname)); //+'-'+file.fieldname
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

  exports.uploadPharmacyPhoto = (req, res) => {
    console.log(req.body)
       if(req.user.role==='pharmacist' ){
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
                    let pharmacy =await Pharmacy.findByIdAndUpdate(req.params.pharmacyId, {$set:{photo: fullPath}}, {new:true});
                    console.log(pharmacy)          
        
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
  
    // create new pharmacy after being validated and sanitized
 
}
    else return res.status(401).json({errors:[{msg:"unauthorized user}]"}]})
 
  };




    
exports.createPharmacy = (req, res) => {
  console.log(req.body)
     if(req.user.role==='pharmacist' ){


     
              try {
                  let newPharmacy = new Pharmacy({
                      userId: req.user.id,
                      name: req.body.name,
                      description: req.body.description,
                      price: req.body.price,
                      pharm: req.body.pharm,
                      quantity: req.body.quantity,
                      expirydate:req.body.expirydate,
                      shipping: req.body.shipping,

                    });
                    
                  
                    newPharmacy.save(function (err, pharmacy) {
                      if (err) {
                          // console.log(err)
                       return res.status(400).json(
                          { errors: [{ msg: "Could Not Add Pharmacy" }] });
                      } else {
                        return res.status(200).json(pharmacy);
                      }
                      
                    });
              }
              catch (err) {
                return res.status(404).json({ errors: [{ msg: 'Image could not be uploaded' }] })
              }
      
            }

};



  
  // handle GET request at /api/pharmacy/:id to get details for a specific pharmacy
  exports.pharmacyDetails = (req, res) => {
    Pharmacy.findById(req.params.id)
      .populate("pharm")
      .populate("pharmacist")
      .exec(function (err, result) {
        if (err) {
          res.status(404).json({ message: "Not Found" });
        } else {
          res.json(result);
        }
      });
  };
  
  
exports.remove=(req,res)=>{
    if(req.user.role === 'pharmacist'){

    Pharmacy.findOneAndDelete({_id:req.params.pharmacyId})
    // Category.findOneAndDelete(req.body.pharm)

    .then((pharmacy) => {
      if (!pharmacy) {

        return res.status(404).json({ msg: "Pharmacy not found" })
     
      }
      res.send({ message: "pharmacy deleted successfully!" });
    })
    .catch((err) => {

        return res.status(500).json({ msg: "Could not delete pharmacy"})

    });
}
else return res.status(401).json({errors:[{msg:"unauthorized user}]"}]})

    
};

exports.update = (req, res) => {
    if(req.user.role === 'pharmacist'){
      console.log(req.body)
        Pharmacy.findByIdAndUpdate(req.params.pharmacyId ,
             {$set: {name:req.body.name, description:req.body.description, price:req.body.price,
            
            quantity:req.body.quantity,expirydate:req.body.expirydate,
            pharm:req.body.pharm,shipping:req.body.shipping}},
            {new:true})

          
          .then((pharmacy) => {
              if (!pharmacy) {

                return res.status(404).send({
                  message: "pharmacy not found ",
                });
              }
              return res.status(200).json(pharmacy);
            })
            .catch((err) => {
              console.log(err)
              return res.status(500).send({
                message: "Could not update pharmacy",
              });
            });
        }
        else return res.status(401).json({errors:[{msg:"unauthorized user}]"}]})
        
            
        };
    


/**
 * sell / arrival
 * by sell = /pharmacys?sortBy=sold&order=desc&limit=4
 * by arrival = /pharmacys?sortBy=createdAt&order=desc&limit=4
 * if no params are sent, then all pharmacys are returned
 */
exports.getPharmacyByPharmId = (req, res) => {
    if(req.user.role==='pharmacist' || req.user.role==='customer'){
    
    Pharmacy.find({pharm:req.params.pharmId})
    .populate('pharm','name')
    
        .exec((err, pharmacys) => {
            if (err) {
                return res.status(400).json({
                    error: "Pharmacys not found"
                });
            }
            return res.json(pharmacys);
        });
    }
    else return res.status(401).json({errors:[{msg:"unauthorized user}]"}]})
};


exports.list = (req, res) => {
    if(req.user.role==='pharmacist' || req.user.role==='customer'){
    let order = req.query.order ? req.query.order : "asc";
    let sortBy = req.query.sortBy ? req.query.sortBy : "_id";
    let limit = req.query.limit ? parseInt(req.query.limit) : 6;

    Pharmacy.find()
        .select("-photo")
        .populate("pharm")
        .sort([[sortBy, order]])
        .limit(limit)
        .exec((err, pharmacys) => {
            if (err) {
                return res.status(400).json({
                    error: "Pharmacys not found"
                });
            }
            res.json(pharmacys);
        });
    }
    else return res.status(401).json({errors:[{msg:"unauthorized user}]"}]})
};

/**
 * it will find the pharmacys based on the req pharmacy pharm
 * other pharmacys that has the same pharm, will be returned
 */

exports.listRelated=(req,res)=>{
    if(req.user.role==='pharmacist' || req.user.role==='customer'){
    let limit=req.query.limit ? parseInt(req.query.limit):6;
    Pharmacy.find({_id:{$ne:req.pharmacy},pharm:req.pharmacy.pharm})
    .limit(limit)
    .populate('pharm','_id name')
    .exec((err,pharmacys)=>{
        if(err){
            return res.status(400).json({
                error:"Pharmacy not found"
            });
        }
        res.json(pharmacys);
    });
}
else return res.status(401).json({errors:[{msg:"unauthorized user}]"}]})
};

exports.listPharms = (req, res) => {
    if(req.user.role==='pharmacist' || req.user.role==='customer'){

    Pharmacy.distinct("pharm", {}, (err, categories) => {
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
 * list pharmacys by search
 * we will implement pharmacy search in react frontend
 * we will show categories in checkbox and price range in radio buttons
 * as the user clicks on those checkbox and radio buttons
 * we will make api request and show the pharmacys to users based on what he wants
 */

exports.listBySearch = (req, res) => {
    if(req.user.role==='pharmacist' || req.user.role==='customer'){
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
    Pharmacy.find(findArgs)
    .select("-photo")
    .populate("pharm")
    .sort([[sortBy, order]])
    .skip(skip)
    .limit(limit)
    .exec((err, data) => {
        if (err) {
            return res.status(400).json({
                error: "Pharmacys not found"
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
    if(req.user.role==='pharmacist' ){
    if(req.pharmacy.photo.data){
        res.set("Content-Type",req.pharmacy.photo.contentType);
        return res.send(req.pharmacy.photo.data);
    }
    next();
}
else return res.status(401).json({error:"unauthorized user"})
};
exports.listSearch = (req, res) => {
    if(req.user.role==='pharmacist' || req.user.role==='customer'){

    // create query object to hold search value and pharm value
    const query = {};
    // assign search value to query.name
    if (req.query.search) {
        query.name = { $regex: req.query.search, $options: "i" };
        // assigne pharm value to query.pharm
        if (req.query.pharm && req.query.pharm != "All") {
            query.pharm = req.query.pharm;
        }
        // find the pharmacy based on query object with 2 properties
        // search and pharm
        Pharmacy.find(query, (err, pharmacys) => {
            if (err) {
                return res.status(400).json({
                    error: errorHandler(err)
                });
            }
            res.json(pharmacys);
        }).select("-photo");
    }
}
else return res.status(401).json({errors:[{msg:"unauthorized user}]"}]})
};