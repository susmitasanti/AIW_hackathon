const express = require('express')
var bodyParser = require('body-parser')
// var something=require('../frontend/')

const app = express()
const port = 3000

const cors = require("cors");
app.use(cors());

const ejs = require('ejs');
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json()); 

app.get('/', (req, res) => {
res.render('../../frontend/registration.ejs')
})
app.get('/login', (req, res) => {
  res.render('../../frontend/login.ejs')
  })
app.use('/api', require('./routes/auth.js'));


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})