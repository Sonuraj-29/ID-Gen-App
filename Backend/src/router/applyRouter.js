const express = require('express')
const router = express.Router()
const studentData = require('../model/studentDataModel')
const multer = require('multer')
const upload = multer()

router.post('/', upload.single('photo'), (req,res)=>{

    var imageData = Buffer.from(req.file.buffer)    //Accessing uploaded photo

    newData = new studentData({
        FirstName : req.body.firstName,
        LastName : req.body.lastName,
        Email : req.body.email,
        Phone : req.body.phone,
        Photo : imageData,
        Course : req.body.course,
        Batch : req.body.batch,
        StartDate : req.body.startDate,
        EndDate : req.body.endDate,
        Status : req.body.status
    })

    newData.save()

    res.send({
        message : 'Application submitted successfully.'
    })

})

module.exports = router