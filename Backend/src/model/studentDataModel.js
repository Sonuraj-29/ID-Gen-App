const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/ID-Gen-App')

const studentSchema = new mongoose.Schema({

    FirstName : String,
    LastName : String,
    Email : String,
    Phone : String,
    Photo : Buffer,
    Course : String,
    Batch : String,
    StartDate : String,
    EndDate : String,
    Status : String
    
})

const student = mongoose.model('student', studentSchema)

module.exports = student