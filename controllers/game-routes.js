const router = require('express').Router();
const sequelize = require('../config/connection');


router.get('/:number', (req,res) =>{

    if(!req.session.loggedIn){
        res.redirect('/');
    }
    let d = new Date();
    let uuid = d.getTime();
    username = req.session.username
  
    res.render('game',  {loggedIn: req.session.loggedIn, username:username ,uuid: uuid } )
})
module.exports = router;
