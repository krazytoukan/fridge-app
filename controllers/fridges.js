const Fridge = require('..models/fridge');

exports.showAll = (req, res) => {
    Fridge.find({}, (err, dogs) => {
        if(err){
            res.json({status: "FAIL", err})
        } else {
            res.json({status: "SUCCESS", payload: {dogs}})
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