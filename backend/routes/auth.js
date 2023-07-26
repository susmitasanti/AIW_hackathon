const express = require('express')
const { validationResult, body } = require('express-validator');
const router = express.Router()
const db = require('../db');
const { requireLogin } = require('../middleware/fetchuser');
const {requireLogin_ngo } = require('../middleware/fetchuser_ngo')

router.post('/login', [
  body('email', "Enter a valid EmailId").notEmpty(),
  body('password', "Enter your Password").notEmpty(),
], async (req, res) => {
  let success;
  try {
    const validate = validationResult(req);
    if (validate.isEmpty()) {
      const result = await db.query(
        `SELECT * FROM registration WHERE email='${req.body.email}';`
      );
      console.log(req.body.email)
      console.log(result)

      if (result.length === 0) {
        success = false;
        res.json({ success: success, msg: "User not found." })
      }
      else {
        const user = result[0];
        if (req.body.password === user.password) {
          success = true;
          req.session.email = req.body.email;
          console.log("sesssionEmail: " + req.session.email)
          res.json({ success: success, msg: "Logged in." })
        }
        else {
          success = false;
          res.json({ success: success, msg: "Password Invalid." })
        }
      }
    }
    else {
      success = false;
      res.json({ success: success, msg: validate.array() });
    }
  } catch (error) {
    success = false;
    res.json({ success: success, msg: "Internal Server Error" })
  }

})

router.post('/register', [
  body('name', "Enter Name").notEmpty(),
  body('email', "Enter EmailId").notEmpty().isEmail(),
  body('phone', "Enter Phone No.").notEmpty(),
  body('address', "Enter Address").notEmpty(),
  body('city', "Enter City Name").notEmpty(),
  body('password', "Enter a valid Password").notEmpty().isStrongPassword()
], async (req, res) => {
  let success;

  try {
    const validate = validationResult(req);
    if (validate.isEmpty()) {
      const result1 = await db.query(
        `SELECT * FROM registration WHERE email='${req.body.email}';`
      );
      if (result1.length == 0) {
        success = true;
        const result2 = await db.query(
          `INSERT INTO registration (name, email, phone, address, city, password) VALUES ('${req.body.name}','${req.body.email}','${req.body.phone}','${req.body.address}','${req.body.city}','${req.body.password}')`
        );
        success = true;
        res.json({ success: success })
      } else {
        success = false;
        res.json({ success: success, msg: "An user with this email already exists" })
      }
    }
    else {
      success = false;
      res.json({ success: success, msg: validate.array() });
    }
  } catch (error) {
    success = false;
    res.json({ success: success, msg: "Internal Server Error" })
    console.log(error)
  }

})

router.post('/ngo-login', [
  body('username', "Enter a Username").notEmpty(),
  body('password', "Enter your Password").notEmpty(),
], async (req, res) => {
  let success;
  try {
    const validate = validationResult(req);
    if (validate.isEmpty()) {
      const result = await db.query(
        `SELECT * FROM ngo_registration WHERE username='${req.body.username}';`
      );
      console.log(req.body.username)
      console.log(result)

      if (result.length === 0) {
        success = false;
        res.json({ success: success, msg: "User not found." })
      }
      else {
        const user = result[0];
        if (req.body.password === user.password) {
          success = true;
          req.session.username = req.body.username;
          console.log("sesssionUsername: " + req.session.username)
          res.json({ success: success, msg: "Logged in." })
        }
        else {
          success = false;
          res.json({ success: success, msg: "Password Invalid." })
        }
      }
    }
    else {
      success = false;
      res.json({ success: success, msg: validate.array() });
    }
  } catch (error) {
    success = false;
    res.json({ success: success, msg: "Internal Server Error" })
  }

})

router.post('/ngo-register', [
  body('ngo_name', "Enter Name").notEmpty(),
  body('username', "Enter Username").notEmpty(),
  body('phone', "Enter Phone No.").notEmpty(),
  body('address', "Enter Address").notEmpty(),
  body('city', "Enter City Name").notEmpty(),
  body('password', "Enter a valid Password").notEmpty().isStrongPassword()
], async (req, res) => {
  let success;

  try {
    const validate = validationResult(req);
    if (validate.isEmpty()) {
      const result1 = await db.query(
        `SELECT * FROM ngo_registration WHERE username='${req.body.username}';`
      );
      if (result1.length == 0) {
        success = true;
        const result2 = await db.query(
          `INSERT INTO ngo_registration (ngo_name, username, phone, address, city, password) VALUES ('${req.body.ngo_name}','${req.body.username}','${req.body.phone}','${req.body.address}','${req.body.city}','${req.body.password}')`
        );
        success = true;
        res.json({ success: success })
      } else {
        success = false;
        res.json({ success: success, msg: "An user with this email already exists" })
      }
    }
    else {
      success = false;
      res.json({ success: success, msg: validate.array() });
    }
  } catch (error) {
    success = false;
    res.json({ success: success, msg: "Internal Server Error" })
    console.log(error)
  }

})


router.get('/profile', requireLogin, async (req, res) => {
  const result = await db.query(
    `SELECT * FROM registration WHERE email='${req.session.email}';`
  );
  console.log(result)
  res.json(result)
})
module.exports = router;
