//imports
const express = require("express")
const bodyParser = require("body-parser")
const morgan = require("morgan")
const helmet = require("helmet")
const cors = require("cors")
const authRouter = require("./routes/authRouter")

//configure
require("dotenv").config()

const server = express()
const PORT = process.env.PORT || 4000

// middleware
server.use(cors("*"))
server.use(helmet())
server.use(morgan("dev"))
server.use(express.json())
server.use(bodyParser.json())

// ROUTES
server.use("/auth", authRouter)

server.get("/", (req, res)=>{
    res.status(200).json({message: "API UP!"})
})

server.listen(PORT, ()=>{
    console.log(`Server is listening at ${PORT}`)
})