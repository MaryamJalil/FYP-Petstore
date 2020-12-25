const express= require('express')
const cors = require('cors');
var bodyParser=require("body-parser");
const app=express()
app.use(express.static('public')); 
const connectDB=require('./config/db')
connectDB()
app.use(bodyParser.urlencoded({ 
    extended: true
}));


app.use(cors())
app.use(express.json({extended:true}))
app.use ('/auth',require('./routes/auth'))
app.use ('/authorization',require('./routes/authorization'))
app.use("/api",require('./routes/category'))
app.use("/api",require('./routes/product'))
app.use("/api",require('./routes/pharmacy'))

app.use("/api",require('./routes/Doctor/Hospital'))
app.use("/api", require('./routes/Doctor/Profile'));
app.use("/api", require('./routes/Customer/lostpet'));
app.use("/api", require('./routes/Customer/Appointment'));




const PORT=process.env.PORT||5000
app.listen(PORT,()=>console.log(`Server started at port ${PORT}`))