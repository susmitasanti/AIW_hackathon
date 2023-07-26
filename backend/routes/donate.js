const express = require('express')
const router = express.Router()
const db = require('../db')
const { requireLogin } = require('../middleware/fetchuser');
const {requireLogin_ngo } = require('../middleware/fetchuser_ngo')


router.post('/donate', requireLogin, async (req, res) => {
    let success;
    try {
        const result = await db.query(
            `INSERT INTO food (email, quantity, name, type, shelf_life, cooked_on, cooked_at) VALUES ('${req.session.email}','${req.body.quantity}','${req.body.name}','${req.body.type}','${req.body.shelf_life}','${req.body.cooked_on}', '${req.body.cooked_at}')`
        );
        success = true;
        res.json({ success: success })

    } catch (error) {
        success = false;
        res.json({ success: success, msg: "Internal Server Error" })
        console.log(error)
    }
})

router.get('/dashboard', requireLogin, async (req, res)=>{
    let success;
    try{
        const result = await db.query(
            `SELECT quantity, name, type, shelf_life, cooked_on, cooked_at, status FROM food WHERE email='${req.session.email}'`
        );
        success=true
        res.render('../../frontend/individual_dashboard.ejs', {users:result})
        
    }catch(error){
        success=false;
        console.log(error)
        res.json({success:success, msg:"Internal Server Error"})
    }
})

router.get('/ngo-dashboard', requireLogin_ngo, async (req, res)=>{
    let success;
    try{
        const result1 = await db.query(
            `SELECT * FROM ngo_registration WHERE username='${req.session.username}';`
          );
          const city=result1[0].city
            console.log(city)
        const result = await db.query(
            `SELECT * FROM food WHERE status='Requested' AND email in (SELECT email FROM registration WHERE city= '${city}')`
        );
        success=true
        console.log(req.session.username)
        res.render('../../frontend/ngo_dashboard.ejs', {users:result})
        
    }catch(error){
        success=false;
        console.log(error)
        res.json({success:success, msg:"Internal Server Error"})
    }
})

router.post('/accept', requireLogin_ngo, (req, res)=>{
    let success;
    try{
    const result=db.query(`UPDATE food SET status='Accepted', ngo='${req.session.username}' WHERE email='${req.query.email}' AND name='${req.query.food_name}' AND type='${req.query.food_type}' AND quantity='${req.query.quantity}' AND cooked_on='${req.query.cooked_on}' AND cooked_at='${req.query.cooked_at}' AND status='Requested';`)
    success=true
    console.log("Accepted")
    console.log(req.session.user)
    console.log(req.query.food_type)
    console.log(req.query.quantity)
    console.log(req.query.cooked_on)
    console.log(req.query.cooked_at)



    }catch(error){
        success=false;
        console.log(error)
        res.json({success:success})
    }
    
})












module.exports = router;
