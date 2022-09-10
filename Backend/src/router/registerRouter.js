const express = require('express')
const router = express.Router()
const users = require('../model/usersDataModel')

router.post('/',(req,res)=>{
// Checking for existing user
    users.findOne({ Email : req.body.Email}).then((user)=>{
    
        if (user){
            res.send({ registered : false })
        }
        
        // Adding new user to database
        else{
            var newUser = {
                Name : req.body.Name,
                Email : req.body.Email,
                Password : req.body.Password
            }
            var newUser = new users(newUser)
            newUser.save()

            res.send({ registered : true })

        }
    })
})

module.exports = router