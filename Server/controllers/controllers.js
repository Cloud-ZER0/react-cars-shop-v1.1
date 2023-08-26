const { model } = require('mongoose');
const CarsModel = require('../models/carModels');

const getAllCars = async (req, res) => {
    try {
        const cars = await CarsModel.find();

        res.status(200).json(cars);
    } catch (error) {
        res.status(500).json({
            name: error.name,
            msg: error.message,

        })
    }
};


const createCar = async (req, res) => {
    try {
        const {name, price, mileage,year,inFavorite,location, carImage} = req.body;
        console.log({name, price, mileage,year,inFavorite,location, carImage});
        const car = await CarsModel.create(
            {
            name, 
            price,
            mileage,
            year,
            inFavorite,
            location,
            carImage: `http://localhost:${process.env.PORT}/static/${req.file.filename}`
        });
        res.status(201).json(car);

    } catch (error) {
        res.status(501).json({
            name: error.name,
            msg: error.message,

        })
    }
}


const findById = async (req, res) => {
    try {
        const car = await CarsModel.find({_id: req.params.id});

        res.status(202).json(car);
        
    } catch (error) {
        res.status(502).json({
            name: error.name,
            msg: error.message,

        })
    }
}


module.exports = {
    getAllCars,
    createCar,
    findById,
} 