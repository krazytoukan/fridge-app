const Fridge = require('../models/fridge.js');

exports.showAll = (req, res) => {
    Fridge.find({}, (err, fridge) => {
        if(err){
            res.json({status: "FAIL", err})
        } else {
            res.json({status: "SUCCESS", payload: {fridge}})
        }
    }) 
};

exports.create = (req, res) => {
    Fridge.create(req.body, (err, newFridge) => {
        if(err){
            res.json({status: "FAIL", err});
        } else {
            res.json({status: "SUCCESS", payload: { newFridge }})
        }
    })
}

exports.showItem = (req,res) => {
    Fridge.findById(req.params.id, (err, fridge) =>{
        if(err){
            res.json({status: "Fail", err})
        } else {
            res.json({status: "Success", payload: {fridge}})
        }
    })
}

exports.update = (req,res) => {
    Fridge.findByIdAndUpdate({_id: req.params.id}, {$set: req.body}, (err, fridge) => {
        if(err) return console.log(err);
        res.json({status: "Success", payload: req.body})
    })
}

exports.destroy = (req,res) => {
    Fridge.findByIdAndRemove(req.param.id, (err) => {
        if(err) return console.log(err);
        res.json({status: "FOOD SPOILED", payload: Fridge})
    })
}