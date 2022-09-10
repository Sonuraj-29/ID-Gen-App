const express = require('express')
const router = express.Router()
const studentData = require('../model/studentDataModel')

router.post('/', (req,res)=>{

    newData = new studentData({
        FirstName : req.body.FirstName,
        LastName : req.body.LastName,
        Photo : req.body.Photo,
        Email : req.body.Email,
        Phone : req.body.Phone,
        Course : req.body.Course,
        Batch : req.body.Batch,
        StartDate : req.body.StartDate,
        EndDate : req.body.EndDate
    })

    newData.save()
})

module.exports = router