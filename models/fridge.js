const mongoose = require('mongoose');

const FridgeSchema = mongoose.Schema({
    name: String,
    category: String,
    freshness: Number
}); 

const Fridge = mongoose.model('Fridge', FridgeSchema);

module.exports = Fridge