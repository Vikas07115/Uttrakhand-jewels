const mongoose = require('mongoose');

const EmployeeSchema = new mongoose.Schema({
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, unique: true, trim: true, lowercase: true },
    password: { type: String, required: true, minlength: 6 }
});

// Model Create
const EmployeeModel = mongoose.model("employees", EmployeeSchema);
module.exports = EmployeeModel;
