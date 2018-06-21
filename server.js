const
    express = require('express'),
    app  = express(),
    logger = require('morgan'),
    mongoose = require('mongoose'),
    PORT = 3000,
    fridgeRouter = require('./routers/fridgeRouter.js')

// Connect to DB
mongoose.connect("mongodb://localhost/fridge", (err) => {
    console.log(err || "Fridge is Humming")
})


app.use(logger('dev'));
app.use(express.json());

// routes
app.user('/api/fridge', fridgeRouter);


app.listen(PORT, (err) => {
    console.log(err || "It's Alive")
})
