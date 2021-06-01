const router = require('express').Router();
const { response } = require('express');
const { User } = require('../../models');
const bcrypt = require('bcrypt');

async function hashing(password) {
  newPassword = await bcrypt.hash(password, 10);
  return newPassword;
}


router.get('/', (req, res) => {
    res.json({message:'this is working !'})
  });

router.post('/',async (req,res)=>{
    newpassword = await hashing(req.body.password)
    User.create({
      username:req.body.username,
      email:req.body.email,
      password: newpassword
    })
    .then(dbUserData => {
      req.session.user_id = dbUserData.id;
      req.session.username = dbUserData.username;
      req.session.loggedIn = true;

      res.json(dbUserData);
    })
    .catch(err =>{
      console.log(err);
      res.status(500).json(err);
    })
  })
  

router.post('/login', (req, res) => {
    // expects {email: 'lernantino@gmail.com', password: 'password1234'}
    User.findOne({
      where: {
        email: req.body.email
      }
    }).then(dbUserData => {
      if (!dbUserData) {
        res.status(400).json({ message: 'No user with that email address!' });
        return;
      }
      
      const validPassword = bcrypt.compareSync(req.body.password,dbUserData.password);
  
      if (!validPassword) {
        res.status(400).json({ message: 'Incorrect password!' });
        return;
      }
  
      req.session.save(() => {
        req.session.user_id = dbUserData.id;
        req.session.username = dbUserData.username;
        req.session.loggedIn = true;
    
        res.json({ user: dbUserData, message: 'You are now logged in!' });
      });
    });
  });

router.post('/logout', (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  }
  else {
    res.status(404).end();
  }
});
module.exports = router;