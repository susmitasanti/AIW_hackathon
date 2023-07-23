const express = require('express')
const router = express.Router()
const db = require('../db')

router.get('/login', (req, res)=>{
res.render('../../frontend/login.ejs')
})

router.post('/login', async (req, res)=>{
  let success;
    const result = await db.query(
        `SELECT * FROM registration WHERE email='${req.body.email}';`
      );
      console.log(req.body.email)
      console.log(result)

    if(result.length===0){
      success=false;
      res.json({success:success, msg:"User not found."})
      }
    else{
      const user=result[0];
      if(req.body.password===user.password){
        success=true;
        res.json({success:success, msg:"Logged in."})
      }
      else{
        success=false;
        res.json({success:success, msg:"Password Invalid."})
      }
    }
    
      })
module.exports = router;
