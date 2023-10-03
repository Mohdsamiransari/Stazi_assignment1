const express = require('express');
const router = express.Router();

// import Car Controllers
const {createCar,getCar}  = require('../controllers/CarControllers')

// routes for car
router.post("/createCar",createCar)
router.get("/cardetail",getCar)

module.exports = router;