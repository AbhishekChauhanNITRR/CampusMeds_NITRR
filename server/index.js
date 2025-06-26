
// Server Instance
const express=require('express');
const app=express();
app.use(express.json());
require('dotenv').config();



// DB connection
require('./Config/database').dbConnect();
// cloudinary connection
const {cloudinaryConnect} = require("./Config/cloudinary");
cloudinaryConnect();



// parsers
const cookieParser = require("cookie-parser");
const cors = require("cors");
const fileUpload = require("express-fileupload");
app.use(cookieParser());
app.use(
	cors({
		origin: "https://campus-meds-nitrr.vercel.app",
		credentials: true,
	})
);
app.use(
	fileUpload({
		useTempFiles: true,
		tempFileDir: "/tmp/",
	})
);



// routes
const userRoutes = require('./Routes/user');
const facilityRoutes = require('./Routes/facility')
const medicineRoutes = require('./Routes/medicine')
const hopitalRoutes = require('./Routes/nearByHospital')
const notificationRoutes = require('./Routes/notification');
const galleryRoutes = require('./Routes/gallery');
const historyRoutes = require('./Routes/history')

app.use("/api/auth",userRoutes)
app.use("/api/facility",facilityRoutes)
app.use("/api/medicine",medicineRoutes)
app.use("/api/hospital",hopitalRoutes)
app.use('/api/notification',notificationRoutes)
app.use('/api/gallery',galleryRoutes)
app.use('/api/history',historyRoutes)




// Server live
const PORT=process.env.PORT || 4000;
app.listen(PORT,()=>{
    console.log("Server running at port 4000");
})