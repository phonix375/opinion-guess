const router = require('express').Router();
const { User } = require('../../models');


router.get('/', (req, res) => {
    res.json({message:'this is working !'})
  });


  
module.exports = router;