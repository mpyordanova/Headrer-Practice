// IMPORTS
const express = require("express")
const bcrypt = require("bcrypt")
const fakeData = require("../fakeData/fakeData")
const { formValidation } = require("../middleware/middleware")

const fakeUserData = []

const authRouter = express.Router()

// POST TAKES BODY
/**
 * FORM:
 * username
 * password
 */

/**
 * fetch.then.then.catch <== ASYNCRONOUS PROGRAMMING
 * async function (){await method()}
 */
authRouter.post("/signup", formValidation, async (req, res)=>{
    const body = req.body

    let salt = Number(process.env.SALT)
    let hashedPassword = await bcrypt.hash(body.password, salt)
    body.password = hashedPassword

    fakeUserData.push(body)
    res.status(201).json({message: fakeUserData[fakeUserData.length -1]})

})
/**
 * FORM:
 * username
 * password
 */

authRouter.post("/signin", formValidation, async(req, res)=>{
    const body = req.body

    for(let i = 0; i < fakeUserData.length; i++){
        if(fakeUserData[i].username === body.username){
            bcrypt.compare(body.password, fakeUserData[i].password, (err, result)=>{
                if(err){
                    res.status(403).json({message: "NOT TODAY"})
                } else if(result===false){
                    res.status(403).json({message: "NOT TODAY"})
                }else {
                    res.status(200).json({message: "HOORAY!"})
                }
            })
        }
    }
//200 = GOOD user
//400 BAD user
})