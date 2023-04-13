const mongoose = require("mongoose");


const PersonSchema = new mongoose.Schema({

    firstName: {type:String, required: [true,"First Name is required."], minLength:[3, "First Name must be atleast 3 characters."]},
    lastName: {type: String, required: [true,"Last Name is required."], minLength:[3, "Last Name must be atleast 3 characters."]},
    date:{type: Date, required:[true, "Date is required."]},
    price: {type: Number, min:[.01, "Nothing is free!"]},
    description: {type:String, minLength:[3, "Description must have atleast 3 characters."]},
    nameOfPlace: {type:String, minLength:[3, "Name of place must have atleast 3 characters."]}
},{timestamps:true})
const Person = mongoose.model("Person", PersonSchema);
module.exports = Person;

