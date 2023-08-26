const express = require('express');
const router = express.Router();
const path = require('path');
const {getAllCars, createCar, findById} = require('../controllers/controllers')
const multer = require('multer');


const storage = multer.diskStorage({
    destination: './assets/',
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '-'+ Date.now() + path.extname(file.originalname));
    }
})


const upload = multer({storage});

router.get('/', getAllCars);
router.get('/:id', findById);
router.post('/', upload.single('carImage'), createCar);

module.exports = router;