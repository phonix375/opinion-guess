const router = require('express').Router();
const { Question } = require('../../models');


// GET /api/Questions
router.get('/', (req, res) => {
    // Access our Question model and run .findAll() method
    Question.findAll({
        })
        .then(dbQuestionData => res.json(dbQuestionData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

// GET /api/Questions/1
router.get('/:id', (req, res) => {
    Question.findOne({
        where: {
            id: req.params.id
        }
    })
        .then(dbQuestionData => {
            if (!dbQuestionData) {
                res.status(404).json({ message: 'No Question found with this id' });
                return;
            }
            res.json(dbQuestionData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});


  
module.exports = router;