const router = require('express').Router();
const sequelize = require('../config/connection');

router.get('/', (req,res) =>{
    let username = false;
    if(req.session.loggedIn){
        username = req.session.username
    }
    console.log(username)
    res.render('homepage', {loggedIn: req.session.loggedIn, username:username})
})
module.exports = router;
