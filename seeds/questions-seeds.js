const { Question } = require('../models/');

const questionsData = [
  {
    question:  "If Sape Chicago had one more floor, what would you put there?",
    answers: '["Games", "Sports or fitness equipment", "More meeting rooms", "Sleeping space", "Lounge", "Privacy", "Bar", "Playground"]',
    scores: "[21, 17, 16, 16, 8, 8, 7, 7]"
  },
  {
    question:  "Where do you want the next office holiday party to be?",
    answers: '["Hotel/hotel bar", "Somewhere with a view", "Somewhere warm", "On a boat", "Museum or park space", "Somewhere cheap", "Brewery", "Somewhere in Europe"]',
    scores: "[19, 19, 17, 15, 10, 8, 6, 6]"
  },
 
];

const seedQuestions = () => Question.bulkCreate(questionsData);

module.exports = seedQuestions;