const mongoose = require('mongoose');
const employeeSchema = new mongoose.Schema({
    firstname: String,
    lastname:String,
})


const Employee = mongoose.model('employee', employeeSchema);

module.exports = Employee