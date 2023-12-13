 const express = require("express");
 const axios = require("axios");




 const app = express();
 const port = process.ENV || 5000;

//  set view engine to ejs
app.set("view engine", "ejs");

// serve the public folder as static file
app.use(express.static("public"))

// render the default index 

app.get("/", (req, res) => {
    res.render("index", {Joke: null} )
})

// handing the submit route
app.post("/submit", async (req, res)=>{
    
// fetching data from the api
const APIurl = 'https://v2.jokeapi.dev/joke/[Category/-ies]'
try {
    const result = await axios.get(APIurl);
    res.render("index", {
        Joke: result.data.Joke
    })
}catch(error){
    console.log(error.message)
    res.status(500)
}


});


 app.listen(port, () => {
    console.log("server running on port 5000")
 });