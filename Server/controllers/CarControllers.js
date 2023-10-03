const Car = require("../models/CarModel");
const cloudinary = require('cloudinary').v2

// Create
exports.createCar = async (req, res) => {
  try {
    const {
      name,
      year,
      seatingCapacity,
      fuel,
      milage,
      transmissionType,
      price,
    } = req.body;

    const image = req.files.photo
    
    
    if (!name || !price || !year) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }


    const carIamge = await cloudinary.uploader.upload(image.tempFilePath,{folder:"CarImages"})    

    const newCar = await Car.create({ 
        image:carIamge.secure_url,
        name,
        year,
        seatingCapacity,
        fuel,
        milage,
        transmissionType,
        price,
    });
    newCar.save()

    return res.status(200).json({
      success: true,
      message: "Car detail created successfully",
      data: newCar,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Something went wrong while creating car model",
    });
  }
};

exports.getCar = async (req, res) => {
  try {
    let page = Number(req.query.page) || 1;
    let skip = (page - 1) * 6
    let search = req.query.search
    const query = search ? { name: { $regex: new RegExp(search, 'i') } } : {};
    const data = await Car.find(query).limit(6).skip(skip);

    return res.status(200).json({
      success: true,
      message: "Data found successfully",
      data,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Something went wrong while fetching car data",
    });
  }
};
