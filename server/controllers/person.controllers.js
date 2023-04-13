const Person = require("../models/person.models.js");



module.exports = {
        findAll: (req,res) => {
                Person.find()
                        .then((allPersons) => res.json(allPersons))
                        .catch((err) => res.status(400).json({message: "Something went wrong", error:err}));
        },
        findOne:(req,res) => {
                Person.findById({_id:req.params.id})
                .then((person) => res.json(person))
                .catch((err)=> res.status(400).json({message: "Something went wrong", error:err }))
        },
        create: (req,res) => {
                Person.create(req.body)
                .then((newPerson) => res.json(newPerson))
                .catch((err)=> res.status(400).json({message: "Something went wrong", error:err }))
        },
        update: (req,res) => {
                Person.findByIdAndUpdate({_id: req.params.id}, req.body, {new:true, runValidators:true})
                .then(updatedPerson => res.json(updatedPerson))
                .catch(err=> res.status(400).json({message:"Something went wrong with updating.",error:err}))
        },
        delete: (req,res) => {
                Person.findByIdAndDelete(req.params.id)
                .then(deletedPerson=> res.json(deletedPerson))
                .catch(err=> res.status(400).json({message: "Something went wrong with deleting." ,error:err}))
        }
};