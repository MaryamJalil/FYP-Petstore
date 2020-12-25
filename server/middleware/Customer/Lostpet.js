
const formidable = require("formidable");
const _ = require("lodash");
const fs = require("fs");
const multer = require('multer')
const Lostpet = require("../../models/Customer/Lostpet");
const { errorHandler } = require("../../helpers/dbErrorHandler");
const path = require('path')

exports.lostpetById=(req,res,next,id)=>{
    if(req.user.role === 'customer'){
    Lostpet.findById(id).exec((err,lostpet)=>{
        if (err || !lostpet){
            return res.status(400).json({
                error:"Lostpet not found"
            });
        }
        req.lostpet=lostpet;
        next();
    });
}
else return res.status(401).json({errors:[{msg:"unauthorized user}]"}]})
};

exports.list = (req, res) => {
  if(req.user.role==='customer' || req.user.role==='doctor'|| req.user.role==='seller'
  || req.user.role==='pharmacist'){
  Lostpet.find({lostpet:req.params.lostpetId})
  
      .exec((err, lostpet) => {
          if (err) {
              return res.status(400).json({
                  error: "Lostpets not found"
              });
          }
          return res.json(lostpet);
      });
  }
  else return res.status(401).json({errors:[{msg:"unauthorized user}]"}]})
};

// exports.list=(req,res)=>{
//   if(req.user.role==='customer' || req.user.role==='doctor'|| req.user.role==='seller'
//         || req.user.role==='pharmacist')
//         {

//     Lostpet.find({userId:req.user.id}).exec((err,data)=>{
//         if (err){
//             return res.status(400).json({errors:[{ msg: err }]});
//         }
//         return res.json(data);
//     });
// }
// else return res.status(401).json({errors:[{msg:"unauthorized user}]"}]})
    
// }


const storageEngine = multer.diskStorage({
  destination: './public/uploads/',
  filename: function (req, file, fn) {
    fn(null, req.params.lostpetId + path.extname(file.originalname)); //+'-'+file.fieldname
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

exports.uploadLostpetPhoto = (req, res) => {
  console.log(req.body)
     if(req.user.role==='customer' ){
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
                  let lostpet =await Lostpet.findByIdAndUpdate(req.params.lostpetId, {$set:{photo: fullPath}}, {new:true});
                  console.log(lostpet)          
      
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

  // create new lostpet after being validated and sanitized

}
  else return res.status(401).json({errors:[{msg:"unauthorized user}]"}]})

};





    
exports.createLostpet = (req, res) => {
  console.log(req.body)
     if(req.user.role==='customer' ){


     
              try {
                  let newLostpet = new Lostpet({
                      userId: req.user.id,
                      name: req.body.name,
                      description: req.body.description,
                      breed: req.body.breed,
                      contact: req.body.contact,
                      

                    });
                    
                  
                    newLostpet.save(function (err, lostpet) {
                      if (err) {
                          console.log(err)
                       return res.status(400).json(
                          { errors: [{ msg: "Could Not Add Lostpet" }] });
                      } else {
                        return res.status(200).json(lostpet);
                      }
                      
                    });
              }
              catch (err) {
                return res.status(404).json({ errors: [{ msg: 'Image could not be uploaded' }] })
              }
      
            }

};



  
  // handle GET request at /api/lostpet/:id to get details for a specific lostpet
  exports.lostpetDetails = (req, res) => {
    Lostpet.findById(req.params.id)
      .populate("customer")
      .exec(function (err, result) {
        if (err) {
          res.status(404).json({ message: "Not Found" });
        } else {
          res.json(result);
        }
      });
  };
  
  
exports.remove=(req,res)=>{
    if(req.user.role === 'customer'){

    Lostpet.findOneAndDelete({_id:req.params.lostpetId})
    // Category.findOneAndDelete(req.body.category)

    .then((lostpet) => {
      if (!lostpet) {

        return res.status(404).json({ msg: "Lostpet not found" })
     
      }
      res.send({ message: "lostpet deleted successfully!" });
    })
    .catch((err) => {

        return res.status(500).json({ msg: "Could not delete lostpet"})

    });
}
else return res.status(401).json({errors:[{msg:"unauthorized user}]"}]})

    
};

exports.update = (req, res) => {
    if(req.user.role === 'customer'){
      console.log(req.body)
        Lostpet.findByIdAndUpdate(req.params.lostpetId ,
             {$set: {name:req.body.name, description:req.body.description, breed:req.body.breed,
            contact:req.body.contact}},
            {new:true})

          
          .then((lostpet) => {
              if (!lostpet) {

                return res.status(404).send({
                  message: "lostpet not found ",
                });
              }
              return res.status(200).json(lostpet);
            })
            .catch((err) => {
              console.log(err)
              return res.status(500).send({
                message: "Could not update lostpet",
              });
            });
        }
        else return res.status(401).json({errors:[{msg:"unauthorized user}]"}]})
        
            
        };

// exports.list = (req, res) => {
//     if(req.user.role==='customer' || req.user.role==='doctor'|| req.user.role==='seller'
//     || req.user.role==='pharmacist'){
//     let order = req.query.order ? req.query.order : "asc";
//     let sortBy = req.query.sortBy ? req.query.sortBy : "_id";
//     let limit = req.query.limit ? parseInt(req.query.limit) : 6;

//     Lostpet.find()
//         .select("-photo")
//         .sort([[sortBy, order]])
//         .limit(limit)
//         .exec((err, lostpets) => {
//             if (err) {
//                 return res.status(400).json({
//                     error: "Lostpets not found"
//                 });
//             }
//             res.json(lostpets);
//         });
//     }
//     else return res.status(401).json({errors:[{msg:"unauthorized user}]"}]})
// };


exports.photo=(req,res,next)=>{
    if(req.user.role==='customer' ){
    if(req.lostpet.photo.data){
        res.set("Content-Type",req.lostpet.photo.contentType);
        return res.send(req.lostpet.photo.data);
    }
    next();
}
else return res.status(401).json({error:"unauthorized user"})
};
