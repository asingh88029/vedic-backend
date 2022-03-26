const express = require("express");
const app = express();
const httpStatus = require("http-status");
const cors = require("cors");
const ApiError = require("./utils/ApiError");
const apiRouter = require("./routes/api/v1");
const serveFileRouter = require("./routes/api/v1/serveFile.route");

app.use(cors());

app.use("/api/v1",apiRouter);

//Routing to serve static files via server
app.use("/",serveFileRouter);

// send back a 404 error for any unknown api request
app.use((req, res, next) => {
    next(new ApiError(httpStatus.NOT_FOUND, "Not found"));
});

app.listen(9600,(err)=>{
    if(err){
        console.log("Server not starting!");
    }else{
        console.log("Server started on port 9600");
    }
})