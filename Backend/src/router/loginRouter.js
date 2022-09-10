const express = require('express')
const router = express.Router()
const users = require('../model/usersDataModel')
const jwt = require('jsonwebtoken')

router.post('/',(req,res)=>{

let Email = req.body.Email
let Password = req.body.Password

// Checking for registered user
users.findOne({Email : Email}).then((user)=>{

    if(user){
        // Checking password and creating token
        if(Password == user.Password){
            let payload = {
                subject : Email + Password
            }
            
            let token = jwt.sign(payload, 'secretKey')
            let name = user.Name
            
            res.send({
                loggedin : true,
                token : token,
                name : name
            })
        }
        else{
            res.send({
                loggedin : false,
                message : 'Incorrect password'
            })
        }
    }
    else{
        res.send({
            loggedin : false,
            message : 'Email ID not registered'
        })
    }
})
})



module.exports = router