const
    express = require('express'),
    app  = express(),
    logger = require('morgan'),
    mongoose = require('mongoose'),
    PORT = 3000

// Connect to DB
mongoose.connect("mongodb://localhost/fridge", (err) => {
    console.log(err || "Fridge is Humming")
})


app.use(logger('dev'));
app.use(express.json());

// routes
// app.user


app.listen(PORT, (err) => {
    console.log(err || "It's Alive")
})
