const express = require('express')
const app = express()
const mongoose = require('mongoose')

require("dotenv").config()



app.get('/', (req,res)=>{

    res.send("Welcome JP ");

})



const connection_string = process.env.CONNECTION_STRING
const port = process.env.PORT || 3000



app.listen(port, () =>{

    console.log(`Server running port ${port}`);
})


mongoose.connect(connection_string, {useNewUrlParser: true})
.then(() => console.log("MongoDB connection established.."))
.catch((error) => console.error("MongoDB connection failed:", error.message));




