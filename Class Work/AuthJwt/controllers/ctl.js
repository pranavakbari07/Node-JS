const userSchema = require("../model/schema")
const bcrypt = require('bcryptjs');
const moment = require('moment');


module.exports.register = async (req, res) => {
    let user =  await userSchema.findOne({email: req.body.email})

    if(user){
        return res.json({message: "User already exists"})
    }

    req.body.password = await bcrypt.hash(req.body.password, 10);
    req.body.createdAt = moment().format('YYYY-MM-DD HH:mm:ss');
    
    await userSchema.create(req.body).then((Data)=>{
        res.json({message: "User registered successfully", data: Data})
    })
}