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
    
    res.render('server',  {loggedIn: req.session.loggedIn, username:username ,uuid: uuid, players:req.params.number, ip:process.env.IP,url:`https://glacial-hamlet-81144.herokuapp.com/game/play/${uuid}` } )
})

router.get('/play/:number', (req,res) =>{

    res.render('play',  {loggedIn: req.session.loggedIn, game: req.params.number} )
})
module.exports = router;
