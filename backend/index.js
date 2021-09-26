const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const todos = require('./routes/todos')


require("dotenv").config()

const app = express()

app.use(cors())
app.use(express.json())


app.use("/api/todos", todos)

app.get('/', (req,res)=>{

    res.send("Welcome to Todo Server ");

})



const connection_string = process.env.CONNECTION_STRING
const port = process.env.PORT || 3000



app.listen(port, () =>{
    console.log(`Server running port ${port}`);
})





mongoose.connect(connection_string, {useNewUrlParser: true})
.then(() => console.log("MongoDB connection established.."))
.catch((error) => console.error("MongoDB connection failed:", error.message));




