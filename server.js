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



  socket.on('startGame', (gameObject) =>{
    panndingGames[gameObject.uuid] = {players:gameObject.players,loggedin: 0}
    console.log(panndingGames)
  });


  socket.on('joinGame', (game) =>{
    if(panndingGames[game] && panndingGames[game].loggedin <= panndingGames[game].players){
      panndingGames[game].loggedin ++
      if(panndingGames[game].loggedin === panndingGames[game].players){
        Question.findAll({
        })
        .then(dbQuestionData => {
          const questions = dbQuestionData.map(question => question.get({ plain: true }));
          console.log(questions[0]);
          console.log('!!!!!!!!!!!!!!!!!!!!!!!!!!!')
          ongoingGames[game] = JSON.parse(JSON.stringify(panndingGames[game]));
          ongoingGames[game].question = questions;
          delete panndingGames[game];
          console.log(panndingGames)
          console.log(ongoingGames)
          console.log('#############################################')
          console.log(ongoingGames[game].question[0])
          io.emit(game, {action:'startGame', question:ongoingGames[game].question[0].question});
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