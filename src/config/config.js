const path = require("path");
const dotenv = require("dotenv");
dotenv.config({path:path.join(__dirname,'../../.env')});

module.exports={
    port:process.env.PORT,
    base_url:process.env.BASE_URL
}