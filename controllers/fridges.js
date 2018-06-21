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