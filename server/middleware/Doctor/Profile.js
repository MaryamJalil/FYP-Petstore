
const formidable = require("formidable");
const _ = require("lodash");
const fs = require("fs");
const multer = require('multer')
const Profile = require("../../models/Doctor/Profile");
const { errorHandler } = require("../../helpers/dbErrorHandler");
const path = require('path')

exports.profileById=(req,res,next,id)=>{
    if(req.user.role === 'doctor'){
    Profile.findById(id).exec((err,profile)=>{
        if (err || !profile){
            return res.status(400).json({
                error:"Profile not found"
            });
        }
        req.profile=profile;
        next();
    });
}
else return res.status(401).json({errors:[{msg:"unauthorized user}]"}]})
};

exports.read = function (req, res) {
        if(req.user.role==='doctor' || req.user.role==='customer'){

    Profile.findById(req.params.profileId, function (err, profile) {
            // console.log(req.params.profileId,)

        if (err) return next(err);
        res.send(profile);
    })
    }
    else return res.status(401).json({errors:[{msg:"unauthorized user}]"}]})
};

;

// const storageEngine = multer.diskStorage({
//     destination: './public/uploads/',
//     filename: function (req, file, fn) {
//       fn(null, req.params.profileId + path.extname(file.originalname)); //+'-'+file.fieldname
//     }
//   });
// const upload = multer({

//     storage: storageEngine,
//     limits: { fileSize: 200000 },
//     fileFilter: function (req, file, callback) {
  
//       validateFile(file, callback);
//     }
//   }).single('photo');
//   var validateFile = function (file, cb) {
//     allowedFileTypes = /jpeg|jpg|png|gif/;
//     const extension = allowedFileTypes.test(path.extname(file.originalname).toLowerCase());
//     const mimeType = allowedFileTypes.test(file.mimetype);
//     if (extension && mimeType) {
//       return cb(null, true);
//     } else {
//       cb("Invalid file type. Only JPEG, PNG and GIF file are allowed.")
//     }
//   }

//   exports.uploadProfilePhoto = (req, res) => {
//     console.log(req.body)
//        if(req.user.role==='doctor' ){
//         upload(req, res, async (error) => {
//             if (error) {
//               let msg = null
//               if (error.message)
//                 msg = error.message
//               else
//                 msg = error
//                 console.log(msg)
//               // return res.status(400).json({ errors: [{ msg: msg }] });
//             } else {
//               if (req.file == undefined) {
        
//                 return res.status(404).json({ errors: [{ msg: 'Image does not exist' }] });
//               } else {             /**
//                  * Create new record in mongoDB
//                  */
//                 var fullPath = "uploads/" + req.file.filename;


//                 try {
//                     console.log(req.params)
//                     let profile =await Profile.findByIdAndUpdate(req.params.profileId, {$set:{photo: fullPath}}, {new:true});
//                     console.log(profile)          
        
//                   return res.status(200).json({ msg: "Image uploaded successfully" })
//                 }
//                 catch (err) {
//                   // return res.status(404).json({ errors: [{ msg: 'Image could not be uploaded' }] })
//                   console.log("image could not upload")
//                 }
        
//               }
//             }
//           })




//     if (!req.files) {
//       return res.status(400).json({ message: "Please upload an image" });
//     }
  
//     // const images_url = req.files.map(image => image.path);
  
//     // create new profile after being validated and sanitized
 
// }
//     else return res.status(401).json({errors:[{msg:"unauthorized user}]"}]})
 
//   };




    
exports.createProfile = (req, res) => {
  console.log(req.body)
     if(req.user.role==='doctor' ){


     
              try {
                  let newProfile = new Profile({
                      userId: req.user.id,
                      name: req.body.name,
                      address: req.body.address,
                      experience: req.body.experience,
                      contact: req.body.contact,
                      hospital: req.body.hospital,
                  

                    });
                    
                  
                    newProfile.save(function (err, profile) {
                      if (err) {
                          console.log(err)
                       return res.status(400).json(
                          { errors: [{ msg: "Could Not Add Profile" }] });
                      } else {
                        return res.status(200).json(profile);
                      }
                      
                    });
              }
              catch (err) {
                return res.status(404).json({ errors: [{ msg: 'Image could not be uploaded' }] })
              }
      
            }

};



  
  // handle GET request at /api/profile/:id to get details for a specific profile
  exports.profileDetails = (req, res) => {
    Profile.findById(req.params.id)
      .populate("hospital")
      .populate("doctor")
      .exec(function (err, result) {
        if (err) {
          res.status(404).json({ message: "Not Found" });
        } else {
          res.json(result);
        }
      });
  };
  
  
exports.remove=(req,res)=>{
    if(req.user.role === 'doctor'){

    Profile.findOneAndDelete({_id:req.params.profileId})
    // Hospital.findOneAndDelete(req.body.hospital)

    .then((profile) => {
      if (!profile) {

        return res.status(404).json({ msg: "Profile not found" })
     
      }
      res.send({ message: "profile deleted successfully!" });
    })
    .catch((err) => {

        return res.status(500).json({ msg: "Could not delete profile"})

    });
}
else return res.status(401).json({errors:[{msg:"unauthorized user}]"}]})

    
};

exports.update = (req, res) => {
    if(req.user.role === 'doctor'){
      console.log(req.body)
        Profile.findByIdAndUpdate(req.params.profileId ,
             {$set: {name:req.body.name, address:req.body.address, experience:req.body.experience, 
                contact:req.body.contact,
            hospital:req.body.hospital}},
            {new:true})

          
          .then((profile) => {
              if (!profile) {

                return res.status(404).send({
                  message: "profile not found ",
                });
              }
              return res.status(200).json(profile);
            })
            .catch((err) => {
              console.log(err)
              return res.status(500).send({
                message: "Could not update profile",
              });
            });
        }
        else return res.status(401).json({errors:[{msg:"unauthorized user}]"}]})
        
            
        };
    


/**
 * sell / arrival
 * by sell = /profiles?sortBy=sold&order=desc&limit=4
 * by arrival = /profiles?sortBy=createdAt&order=desc&limit=4
 * if no params are sent, then all profiles are returned
 */
exports.getProfilesByHospitalId = (req, res) => {
    if(req.user.role==='doctor' || req.user.role==='customer'){
    
    Profile.find({hospital:req.params.hospitalId})
    .populate('hospital','name')
    
        .exec((err, profiles) => {
            if (err) {
                return res.status(400).json({
                    error: "Profiles not found"
                });
            }
            return res.json(profiles);
        });
    }
    else return res.status(401).json({errors:[{msg:"unauthorized user}]"}]})
};


exports.list = (req, res) => {
    if(req.user.role==='doctor' || req.user.role==='customer'){
    let order = req.query.order ? req.query.order : "asc";
    let sortBy = req.query.sortBy ? req.query.sortBy : "_id";
    let limit = req.query.limit ? parseInt(req.query.limit) : 6;

    Profile.find()
        .select("-photo")
        .populate("hospital")
        .sort([[sortBy, order]])
        .limit(limit)
        .exec((err, profiles) => {
            if (err) {
                return res.status(400).json({
                    error: "Profiles not found"
                });
            }
            res.json(profiles);
        });
    }
    else return res.status(401).json({errors:[{msg:"unauthorized user}]"}]})
};

/**
 * it will find the profiles based on the req profile hospital
 * other profiles that has the same hospital, will be returned
 */

exports.listRelated=(req,res)=>{
    if(req.user.role==='doctor' || req.user.role==='customer'){
    let limit=req.query.limit ? parseInt(req.query.limit):6;
    Profile.find({_id:{$ne:req.profile},hospital:req.profile.hospital})
    .limit(limit)
    .populate('hospital','_id name')
    .exec((err,profiles)=>{
        if(err){
            return res.status(400).json({
                error:"Profile not found"
            });
        }
        res.json(profiles);
    });
}
else return res.status(401).json({errors:[{msg:"unauthorized user}]"}]})
};

exports.listHospitals = (req, res) => {
    if(req.user.role==='doctor' || req.user.role==='customer'){

    Profile.distinct("hospital", {}, (err, hospitals) => {
        if (err) {
            return res.status(400).json({
                error: "Hospitals not found"
            });
        }
        res.json(hospitals);
    });
}
else return res.status(401).json({error:"unauthorized user"})
};
/**
 * list profiles by search
 * we will implement profile search in react frontend
 * we will show hospitals in checkbox and price range in radio buttons
 * as the user clicks on those checkbox and radio buttons
 * we will make api request and show the profiles to users based on what he wants
 */

// exports.listBySearch = (req, res) => {
//     if(req.user.role==='doctor' || req.user.role==='customer'){
//     let order = req.body.order ? req.body.order : "desc";
//     let sortBy = req.body.sortBy ? req.body.sortBy : "_id";
//     let limit = req.body.limit ? parseInt(req.body.limit) : 100;
//     let skip = parseInt(req.body.skip);
//     let findArgs = {};

//     // console.log(order, sortBy, limit, skip, req.body.filters);
//     // console.log("findArgs", findArgs);

//     for (let key in req.body.filters) {
//         if (req.body.filters[key].length > 0) {
//             if (key === "price") {
//                 // gte -  greater than price [0-10]
//                 // lte - less than
//                 findArgs[key] = {
//                     $gte: req.body.filters[key][0],
//                     $lte: req.body.filters[key][1]
//                 };
//             } else {
//                 //that will be for hospitals
//                 findArgs[key] = req.body.filters[key];
//             }
//         }
//     }
//     Profile.find(findArgs)
//     .select("-photo")
//     .populate("hospital")
//     .sort([[sortBy, order]])
//     .skip(skip)
//     .limit(limit)
//     .exec((err, data) => {
//         if (err) {
//             return res.status(400).json({
//                 error: "Profiles not found"
//             });
//         }
//         res.json({
//             size: data.length,
//             data
//         });
//     });
// }
// else return res.status(401).json({errors:[{msg:"unauthorized user}]"}]})
// };
// exports.photo=(req,res,next)=>{
//     if(req.user.role==='doctor' ){
//     if(req.profile.photo.data){
//         res.set("Content-Type",req.profile.photo.contentType);
//         return res.send(req.profile.photo.data);
//     }
//     next();
// }
// else return res.status(401).json({error:"unauthorized user"})
// };
// exports.listSearch = (req, res) => {
//     if(req.user.role==='doctor' || req.user.role==='customer'){

//     // create query object to hold search value and hospital value
//     const query = {};
//     // assign search value to query.name
//     if (req.query.search) {
//         query.name = { $regex: req.query.search, $options: "i" };
//         // assigne hospital value to query.hospital
//         if (req.query.hospital && req.query.hospital != "All") {
//             query.hospital = req.query.hospital;
//         }
//         // find the profile based on query object with 2 properties
//         // search and hospital
//         Profile.find(query, (err, profiles) => {
//             if (err) {
//                 return res.status(400).json({
//                     error: errorHandler(err)
//                 });
//             }
//             res.json(profiles);
//         }).select("-photo");
//     }
// }
// else return res.status(401).json({errors:[{msg:"unauthorized user}]"}]})
// };