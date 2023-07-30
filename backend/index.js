const express = require('express')
var bodyParser = require('body-parser')
const session = require('express-session');

// var something=require('../frontend/')

const app = express()
const port = 3000
app.use(
  session({
    secret: 'access_denied@1111',
    resave: false,
    saveUninitialized: true,
  })
);

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

app.get('/ngo-login', (req, res) => {
  res.render('../../frontend/ngo_login.ejs')
})

app.get('/ngo-dashboard', (req, res) => {
  res.render('../../frontend/ngo_dashboard.ejs')
})



app.use('/auth', require('./routes/auth.js'));
app.use('/api', require('./routes/donate.js'));



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})