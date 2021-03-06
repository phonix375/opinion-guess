const { Question } = require("../models/");

const questionsData = [
  {
    question:  'Where do you want the next office holiday party to be?',
    answers: '["Hotel/hotel bar", "Somewhere with a view", "Somewhere warm", "On a boat", "Museum or park space", "Somewhere cheap", "Brewery", "Somewhere in Europe"]',
    scores: '[19, 19, 17, 15, 10, 8, 6, 6]'
  },
  {
    question:  'What’s your favorite lunch spot near the office?',
    answers: '["Chasement", "Hannah’s Bretzel", "Pret", "Benjyehuda", "Chipotle", "Oasis Café", "Saucy Porka"]',
    scores: '[35, 16, 16, 10, 9, 7, 7]'
  },
  {
    question:  'Name a personality trait you hope people mention when talking about you',
    answers: '["Kind", "Friendly", "Funny", "Honest", "Nice", "Awesome", "Smart", "Trustworthy"]',
    scores: '[22, 15, 15, 12, 12, 8, 8, 8]'
  },
  {
    question:  'What’s your favorite board game?',
    answers: '["Monopoly", "Scrabble", "Risk", "Clue", "Trivial Pursuit", "Settlers of Catan", "Cards Against Humanity", "Scattergories"]',
    scores: '[26, 20, 15, 13, 7, 7, 7, 5]'
  },
  {
    question: 'What snack do you always keep at your desk?',
    answers: '["Chocolate", "Almonds", "Candy", "Fruit", "Booze", "Cookies", "Food Bar"]',
    scores: '[20, 20, 15, 15, 11, 10, 9]'	
  },
  {
    question: 'What is one thing you avoid when taking public transit?',
    answers: '["People", "Strange Smells", "Touching Things", "Wet/Sticky Seats", "Urine", "Eye Contact", "Bums", "Standing"]',
    scores: '[27, 20, 17, 8, 7, 7, 7, 7]'
  },
  {
    question: 'What is your one word reaction to the words "polar vortex"?',
    answers: '["Fuck/Other Expletives", "Brrr", "Cold", "Ugh", "Chicago", "No", "Freezing"]',
    scores: '[35, 20, 11, 11, 9, 7, 7]'
  },
  {
    question: 'What is the first app you use when you wake up?',
    answers: '["Email", "Weather", "News/Magazine/ESPN", "Instagram", "Facebook", "Reddit", "Alarm"]',
    scores: '[28, 19, 17, 13, 13, 6, 4]'
  },
  {
    question: 'Name the chore that you dread the most?',
    answers: '["Laundry", "Dishes", "Cleaning Bathroom", "Taking out the Trash", "Work Duties", "Cleauygtning Baby/Cat Poop"]',
    scores: '[28, 26, 17, 10, 10, 9]'
  },
  {
    question: 'What is the worst thing to realize that you left home without?',
    answers: '["Phone","Keys","Wallet", "Pants", "Computer", "CTA/Transit Pass", "Headphones", "Deodorant"]',
    scores: '[42, 14, 12, 8, 8, 6, 5, 5]'
  },
  {	
    question: 'What is your favorite playground equipment?',
    answers: '["Swing", "Monkey Bars", "Slide", "Merry-go-round", "A Ball"]',
    scores: '[56, 17, 16, 5, 5]'
  }
];

const seedQuestions = () => Question.bulkCreate(questionsData);

module.exports = seedQuestions;