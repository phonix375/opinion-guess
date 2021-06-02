const express = require('express');
const sequelize = require('./config/connection');
const session = require('express-session');
const exphbs = require('express-handlebars');
const path = require('path');
const http = require('http');
const { Question } = require('./models');

let panndingGames = {}
let ongoingGames = {}



const SequelizeStore = require('connect-session-sequelize')(session.Store);


const sess = {
  secret: process.env.SECRET,
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};
// import sequelize connection

const app = express();
const PORT = process.env.PORT || 3001;

//socket.io 
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);
app.io = io;




const hbs = exphbs.create({});

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');


app.use(session(sess));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(require('./controllers/'));

//soket io listener
io.on('connection', (socket) => {
  console.log('new connection');

  socket.on('answer', (blabla) =>{
   console.log('FOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO');
   console.log(blabla);
  });

  socket.on('startGame', (gameObject) =>{
    panndingGames[gameObject.uuid] = {players:gameObject.players,loggedin: 0,playersObj: {}}
    console.log(panndingGames)
  });


  socket.on('joinGame', (obj) =>{
    if(panndingGames[obj.game] && panndingGames[obj.game].loggedin <= panndingGames[obj.game].players){
      panndingGames[obj.game].loggedin ++
      panndingGames[obj.game].playersObj[obj.nick] = {score:0}
      console.log(panndingGames[obj.game]);
      if(panndingGames[obj.game].loggedin === panndingGames[obj.game].players){
        Question.findAll({
        })
        .then(dbQuestionData => {
          const questions = dbQuestionData.map(question => question.get({ plain: true }));
          console.log(questions[0]);
          ongoingGames[obj.game] = JSON.parse(JSON.stringify(panndingGames[obj.game]));
          ongoingGames[obj.game].question = questions;
          ongoingGames[obj.game].submittedAnswers = 0
          delete panndingGames[obj.game];

          console.log(ongoingGames[obj.game].question[0])
          io.emit(obj.game, {action:'startGame', question:ongoingGames[obj.game].question[0].question});
        });
        
      }
    }
  });
});



// sync sequelize models to the database, then turn on the server
sequelize.sync({force:false}).then(()=>{
  server.listen(PORT, () => {
    console.log(`Server started`);
  });

});