const router = require('express').Router();
const sequelize = require('../config/connection');
require('dotenv').config();



router.get('/:number', (req,res) =>{

    if(!req.session.loggedIn){
        res.redirect('/');
    }
    let d = new Date();
    let uuid = d.getTime();
    username = req.session.username
    
    res.render('server',  {loggedIn: req.session.loggedIn, username:username ,uuid: uuid, players:req.params.number, ip:process.env.IP,url:`localhost:3001/game/play/${uuid}` } )
})

router.get('/play/:number', (req,res) =>{

    res.send('hellow plya')
    
    // res.render('play',  {loggedIn: req.session.loggedIn, username:username ,uuid: uuid, players:req.params.number } )
})
module.exports = router;
