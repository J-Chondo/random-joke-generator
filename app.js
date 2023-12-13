 const express = require("express");
 const axios = require("axios");



 const app = express();
 const port = process.ENV || 5000;

//  set view engine to ejs
app.set("view engine", "ejs");

// serve the public folder as static file
app.use(express.static("public"))



 app.listen(port, () => {
    console.log("server running on port 5000")
 });