const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const app = express();

// Middlewares
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


// GET - Retrieve data from the server
app.get("/", (req, res) => {
    res.json("Voila Amazon Clone");
});

// POST - Send data from the frontend to server
app.post("/", (req, res) => {
    console.log(req.body);
});


app.listen(5000, (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log('Listening on port', 5000)
    }
})