const express = require("express");
const app = express();

const cloudinary = require('cloudinary').v2
const cors = require("cors");
const { dbconnect } = require("./config/database");
const carRoutes = require("./routes/CarRoutes");
const fileUpload = require('express-fileupload')
const dotenv = require("dotenv");

dotenv.config();
dbconnect();
const port = process.env.PORT;
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);
app.use(fileUpload({
  useTempFiles:true
}))

cloudinary.config({ 
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET
  });

app.use("/api/v1/create", carRoutes);

app.get("/", (req, res) => {
  return res.status(200).json({
    success: true,
    message: "Your server is running....",
  });
});

app.listen(port, () => {
  console.log(`Server is running at ${port} port`);
});
