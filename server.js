const express = require('express');
const sequelize = require('./config/connection');
const session = require('express-session');
const exphbs = require('express-handlebars');
const path = require('path');
const http = require('http');

let panndingGames = {}



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
  socket.on('chat message', (msg) => {
    console.log('message: ' + msg);
  });
  socket.on('startGame', (gameObject) =>{
    panndingGames[gameObject.uuid] = {players:gameObject.players}
    console.log(panndingGames)
  })
});

// sync sequelize models to the database, then turn on the server
sequelize.sync({force:false}).then(()=>{
  server.listen(PORT, () => {
    console.log(`Server started`);
  });

});