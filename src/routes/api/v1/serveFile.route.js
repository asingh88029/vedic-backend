const express = require("express");
const router = express.Router();
const path = require("path");


// GET hospital_1 image
router.get('/image/hospital/1', (req, res) => {
    res.sendFile(path.resolve(__dirname, './../../../../server_storage/hospital_1.jpeg'));
})

// GET hospital_2 image
router.get('/image/hospital/2', (req, res) => {
    res.sendFile(path.resolve(__dirname, './../../../../server_storage/hospital_2.jpeg'));
})

// GET hospital_3 image
router.get('/image/hospital/3', (req, res) => {
    res.sendFile(path.resolve(__dirname, './../../../../server_storage/hospital_3.jpeg'));
})

// GET hospital_4 image
router.get('/image/hospital/4', (req, res) => {
    res.sendFile(path.resolve(__dirname, './../../../../server_storage/hospital_4.jpeg'));
})

// GET hospital_5 image
router.get('/image/hospital/5', (req, res) => {
    res.sendFile(path.resolve(__dirname, './../../../../server_storage/hospital_5.jpeg'));
})

// GET hospital_6 image
router.get('/image/hospital/6', (req, res) => {
    res.sendFile(path.resolve(__dirname, './../../../../server_storage/hospital_6.jpeg'));
})

// GET hospital_7 image
router.get('/image/hospital/7', (req, res) => {
    res.sendFile(path.resolve(__dirname, './../../../../server_storage/hospital_7.jpeg'));
})

// GET hospital_8 image
router.get('/image/hospital/8', (req, res) => {
    res.sendFile(path.resolve(__dirname, './../../../../server_storage/hospital_8.jpeg'));
})

// GET hospital_9 image
router.get('/image/hospital/9', (req, res) => {
    res.sendFile(path.resolve(__dirname, './../../../../server_storage/hospital_9.jpeg'));
})

// GET hospital_10 image
router.get('/image/hospital/10', (req, res) => {
    res.sendFile(path.resolve(__dirname, './../../../../server_storage/hospital_10.jpeg'));
})

// GET hospital_11 image
router.get('/image/hospital/11', (req, res) => {
    res.sendFile(path.resolve(__dirname, './../../../../server_storage/hospital_11.jpeg'));
})

module.exports = router;