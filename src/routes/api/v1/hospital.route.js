const httpStatus = require("http-status");
const express = require("express");
const router = express.Router();
const hospitalData = require("./../../../../database/hospital")

router.get("/",(req,res)=>{
    const city = req.query.city;
    if(city==="kharari"){
       res.status(httpStatus.OK).send(hospitalData.kharari);
    }else if(city==="delhi"){
        res.status(httpStatus.OK).send(hospitalData.delhi);
    }
});

module.exports = router;
