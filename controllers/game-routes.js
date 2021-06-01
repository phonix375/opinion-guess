const router = require('express').Router();
const sequelize = require('../config/connection');


router.get('/:number', (req,res) =>{
    if(!req.session.loggedIn){
        res.redirect('/');
    }
    console.log(req.params.number);
    res.render('game', {})
})
module.exports = router;
