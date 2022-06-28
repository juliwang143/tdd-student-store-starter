const express = require('express')
const app = express()
const morgan = require('morgan')
const bodyParser = require('body-parser');
const cors = require('cors')
const store = require('./routes/Store');
// TODO import errors

app.use(cors());
app.use(bodyParser.json());
app.use(morgan('tiny'));

app.use('/store', store);

app.get('/', (req, res) => {
    res.status(200).send({"ping": "pong"});
})

module.exports = app;

