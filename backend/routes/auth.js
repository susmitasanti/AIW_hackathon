const express = require('express')
const { validationResult, body } = require('express-validator');
const router = express.Router()
const db = require('../db')

router.post('/login', [
  body('email', "Enter a valid EmailId").notEmpty().isEmail(),
  body('password', "Enter your Password").notEmpty().isStrongPassword()
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
        res.json({ success: success, error: "User not found." })
      }
      else {
        const user = result[0];
        if (req.body.password === user.password) {
          success = true;
          res.json({ success: success, msg: "Logged in." })
        }
        else {
          success = false;
          res.json({ success: success, error: "Password Invalid." })
        }
      }
    }
    else {
      success = false;
      res.json({ success: success, error: validate.array() });
    }
  } catch (error) {
    success = false;
    res.json({ success: success, error: "Internal Server Error" })
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
        success=true;
        const result2 = await db.query(
          `INSERT INTO registration (name, email, phone, address, city, password) VALUES ('${req.body.name}','${req.body.email}','${req.body.phone}','${req.body.address}','${req.body.city}','${req.body.password}')`
        );
        success = true;
        res.json({ success: success })
      }else{
        success=false;
        res.json({success:success, error:"An user with this email already exists"})
      }
    }
    else {
      success = false;
      res.json({ success: success, error: validate.array() });
    }
  } catch (error) {
    success = false;
    res.json({ success: success, error: "Internal Server Error" })
    console.log(error)
  }

})
module.exports = router;
