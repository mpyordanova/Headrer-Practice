function formValidation(req, res, next){
    const body = req.body
    if(body.username.length < 5 || body.username.length > 15 || body.username === undefined){
        res.status(400).json({message: "Please Complete Data"})
    } 
    else if(body.password.length < 8 || body.password === undefined ){
        res.status(400).json({message: "Please Complete Data"})
    }else{
        next()
    }
}

module.exports = {formValidation}