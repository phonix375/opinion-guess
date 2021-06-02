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
  {
    question:  "What’s your favorite lunch spot near the office?",
    answers: '["Chasement", "Hannah’s Bretzel", "Pret", "Benjyehuda", "Chipotle", "Oasis Café", "Saucy Porka"]',
    scores: "[35, 16, 16, 10, 9, 7, 7]"
  },
  {
    question:  "Name a personality trait you hope people mention when talking about you",
    answers: '["Kind", "Friendly", "Funny", "Honest", "Nice", "Awesome", "Smart", "Trustworthy"]',
    scores: "[22, 15, 15, 12, 12, 8, 8, 8]"
  },
  {
    question:   "What’s your favorite board game?",
    answers: '["Monopoly", "Scrabble", "Risk", "Clue", "Trivial Pursuit", "Settlers of Catan", "Cards Against Humanity", "Scattergories"]',
    scores: "[26, 20, 15, 13, 7, 7, 7, 5]"
  },
];

const seedQuestions = () => Question.bulkCreate(questionsData);

module.exports = seedQuestions;