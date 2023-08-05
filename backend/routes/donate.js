const express = require('express')
const router = express.Router()
const db = require('../db')
const { requireLogin } = require('../middleware/fetchuser');
const { requireLogin_ngo } = require('../middleware/fetchuser_ngo')


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

router.get('/dashboard', requireLogin, async (req, res) => {
    let success;
    try {
        const result = await db.query(
            `SELECT quantity, name, type, shelf_life, cooked_on, cooked_at, status, ngo FROM food WHERE email='${req.session.email}' AND status='Requested'`
        );

        const ngosData = []; // Create an array to store the result1 data for each ngo

        for (const row of result) {
            const ngo = row.ngo;
            const result1 = await db.query(
                `SELECT ngo_name, phone, address, city FROM ngo_registration WHERE username='${ngo}'`
            );
            ngosData.push(result1); // Store the result1 data for each ngo in the array
        }

        console.log("ngos", ngosData); // Log the array of ngosData for verification
        success = true;
        res.render('../../frontend/individual_dashboard.ejs', { users: result, ngos: ngosData });


    } catch (error) {
        success = false;
        console.log(error)
        res.json({ success: success, msg: "Internal Server Error" })
    }
})

router.get('/dashboard-acceptedRequests', requireLogin, async (req, res) => {
    let success;
    try {
        const result = await db.query(
            `SELECT quantity, name, type, shelf_life, cooked_on, cooked_at, status, ngo FROM food WHERE email='${req.session.email}' AND status='Accepted'`
        );

        const ngosData = []; // Create an array to store the result1 data for each ngo

        for (const row of result) {
            const ngo = row.ngo;
            const result1 = await db.query(
                `SELECT ngo_name, phone, address, city FROM ngo_registration WHERE username='${ngo}'`
            );
            ngosData.push(result1); // Store the result1 data for each ngo in the array
        }

        console.log("ngos", ngosData); // Log the array of ngosData for verification
        success = true;
        res.render('../../frontend/individual_dashboard_accepted.ejs', { users: result, ngos: ngosData });


    } catch (error) {
        success = false;
        console.log(error)
        res.json({ success: success, msg: "Internal Server Error" })
    }
})

router.get('/dashboard-delivered', requireLogin, async (req, res) => {
    let success;
    try {
        const result = await db.query(
            `SELECT quantity, name, type, shelf_life, cooked_on, cooked_at, status, ngo FROM food WHERE email='${req.session.email}' AND status='Delivered'`
        );

        const ngosData = []; // Create an array to store the result1 data for each ngo

        for (const row of result) {
            const ngo = row.ngo;
            const result1 = await db.query(
                `SELECT ngo_name, phone, address, city FROM ngo_registration WHERE username='${ngo}'`
            );
            ngosData.push(result1); // Store the result1 data for each ngo in the array
        }

        console.log("ngos", ngosData); // Log the array of ngosData for verification
        success = true;
        res.render('../../frontend/individual_dashboard_delivered.ejs', { users: result, ngos: ngosData });


    } catch (error) {
        success = false;
        console.log(error)
        res.json({ success: success, msg: "Internal Server Error" })
    }
})

router.get('/ngo-dashboard', requireLogin_ngo, async (req, res) => {
    let success;
    try {
        const result1 = await db.query(
            `SELECT * FROM ngo_registration WHERE username='${req.session.username}';`
        );
        const city = result1[0].city
        const result = await db.query(
            `SELECT * FROM food WHERE status='Requested' AND email in (SELECT email FROM registration WHERE city= '${city}')`
        );

        success = true
        console.log(req.session.username)
        res.render('../../frontend/ngo_dashboard.ejs', { users: result })

    } catch (error) {
        success = false;
        console.log(error)
        res.json({ success: success, msg: "Internal Server Error" })
    }
})

router.post('/accept', requireLogin_ngo, (req, res) => {
    let success;
    try {
        const result = db.query(`UPDATE food SET status='Accepted', ngo='${req.session.username}' WHERE email='${req.query.email}' AND name='${req.query.food_name}' AND type='${req.query.food_type}' AND quantity='${req.query.quantity}' AND cooked_on='${req.query.cooked_on}' AND cooked_at='${req.query.cooked_at}' AND status='Requested';`)

        success = true
        console.log("Accepted")
        console.log(req.session.username)
        console.log(req.query.food_type)
        console.log(req.query.quantity)
        console.log(req.query.cooked_on)
        console.log(req.query.cooked_at)
    } catch (error) {
        success = false;
        console.log(error)
    }
})

router.post('/delivered', requireLogin_ngo, (req, res) => {
    let success;
    try {
        const result = db.query(`UPDATE food SET status='Delivered', ngo='${req.session.username}' WHERE email='${req.query.email}' AND name='${req.query.food_name}' AND type='${req.query.food_type}' AND quantity='${req.query.quantity}' AND cooked_on='${req.query.cooked_on}' AND cooked_at='${req.query.cooked_at}' AND status='Accepted';`)

        success = true
        console.log("Accepted")
        console.log(req.query.email)
        console.log(req.session.username)
        console.log(req.query.food_name)
        console.log(req.query.food_type)
        console.log(req.query.quantity)
        console.log(req.query.cooked_on)
        console.log(req.query.cooked_at)
    } catch (error) {
        success = false;
        console.log(error)
    }
})

router.get('/ngo-dashboard-acceptedRequests', requireLogin_ngo, async (req, res) => {
    let success;
    try {
        const result1 = await db.query(
            `SELECT * FROM ngo_registration WHERE username='${req.session.username}';`
        );
        const city = result1[0].city
        const result = await db.query(
            `SELECT * FROM food WHERE status='Accepted' AND email in (SELECT email FROM registration WHERE city= '${city}') AND ngo='${req.session.username}'`
        );
        const donorData = [];
        for (const row of result) {
            const donor = row.email;
            const result2 = await db.query(
                `SELECT name, email, phone, address, city FROM registration WHERE email='${donor}'`
            );
            donorData.push(result2); // Store the result1 data for each ngo in the array
        }
        success = true
        console.log(req.session.username)
        res.render('../../frontend/ngo_dashboard_accepted.ejs', { users: result, donors: donorData })

    } catch (error) {
        success = false;
        console.log(error)
        res.json({ success: success, msg: "Internal Server Error" })
    }
})

router.get('/ngo-dashboard-delivered', requireLogin_ngo, async (req, res) => {
    let success;
    try {
        const result1 = await db.query(
            `SELECT * FROM ngo_registration WHERE username='${req.session.username}';`
        );
        const city = result1[0].city
        const result = await db.query(
            `SELECT * FROM food WHERE status='Delivered' AND email in (SELECT email FROM registration WHERE city= '${city}') AND ngo='${req.session.username}'`
        );
        const donorData = [];
        for (const row of result) {
            const donor = row.email;
            const result2 = await db.query(
                `SELECT name, email, phone, address, city FROM registration WHERE email='${donor}'`
            );
            donorData.push(result2); // Store the result1 data for each ngo in the array
        }
        success = true
        console.log(req.session.username)
        res.render('../../frontend/ngo_dashboard_delivered.ejs', { users: result, donors: donorData })

    } catch (error) {
        success = false;
        console.log(error)
        res.json({ success: success, msg: "Internal Server Error" })
    }
})

router.get('/ngo-info', async (req, res) => {
    let success;
    try {
        const result = await db.query(
            `SELECT * FROM ngo_registration WHERE username='${req.query.username}';`
        );

    } catch (error) {
        success = false;
        console.log(error)
        res.json({ success: success })
    }
})

router.get('/donation-form', requireLogin, (req, res) => {
    res.render('../../frontend/donation_form.ejs')
})

router.get('/profile', requireLogin, async (req, res) => {
    let success;
    try {
        const result = await db.query(
            `SELECT * FROM registration WHERE email='${req.session.email}';`
        );
        success = true
        console.log(req.session.email)
        res.render('../../frontend/profile_page.ejs', { users: result })

    } catch (error) {
        success = false;
        console.log(error)
        res.json({ success: success, msg: "Internal Server Error" })
    }
})

router.get('/ngo-profile', requireLogin_ngo, async (req, res) => {
    let success;
    try {
        const result = await db.query(
            `SELECT * FROM ngo_registration WHERE username='${req.session.username}';`
        );
        success = true
        console.log(req.session.username)
        res.render('../../frontend/ngo_profile.ejs', { users: result })

    } catch (error) {
        success = false;
        console.log(error)
        res.json({ success: success, msg: "Internal Server Error" })
    }
})

router.post('/change-profile', requireLogin, async (req, res)=>{
    let success;
    try{
        const result = await db.query(
            `UPDATE registration SET name='${req.body.name}',phone='${req.body.phone}',address='${req.body.address}',city='${req.body.city}', password='${req.body.password}' where email='${req.session.email}' `
        )
        success=true;
        res.json({success:success})
    }catch(error){
        success=false;
        res.json({success:success, msg:"Changing Failed!!"})

    }
})

router.post('/ngo-change-profile', requireLogin_ngo, async (req, res)=>{
    let success;
    try{
        const result = await db.query(
            `UPDATE ngo_registration SET ngo_name='${req.body.name}',phone='${req.body.phone}',address='${req.body.address}',city='${req.body.city}', password='${req.body.password}' where username='${req.session.username}' `
        )
        success=true;
        res.json({success:success})
    }catch(error){
        success=false;
        res.json({success:success, msg:"Changing Failed!!"})

    }
})















module.exports = router;
