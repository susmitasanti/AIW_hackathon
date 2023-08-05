const express = require('express')
var bodyParser = require('body-parser')
const session = require('express-session');
const multer = require('multer');
const path = require('path');

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

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
      cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
      cb(null, Date.now() + path.extname(file.originalname));
  }
});

const upload = multer({ storage: storage });
app.use('/uploads', express.static('uploads'));

app.post('/upload', upload.single('profilePic'), (req, res) => {
  const profilePicPath = req.file.path;

  res.json({ filePath: profilePicPath });
});

app.use(express.static('frontend'));
app.use('/uploads', express.static('uploads'));


app.get('/', (req, res) => {
  res.render('../../frontend/registration.ejs')
})
app.get('/login', (req, res) => {
  res.render('../../frontend/login.ejs')
})
app.get('/ngo-register', (req, res)=>{
  res.render('../../frontend/ngo_registration.ejs')
})
app.get('/ngo-login', (req, res) => {
  res.render('../../frontend/login_ngo.ejs')
})

app.use('/auth', require('./routes/auth.js'));
app.use('/api', require('./routes/donate.js'));

app.post('/api/upload', upload.single('profilePic'), (req, res) => {
  const profilePicPath = req.file.path;

  res.json({ filePath: profilePicPath });
});



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})