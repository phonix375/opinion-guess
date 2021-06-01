const express = require('express');
const sequelize = require('./config/connection');
const session = require('express-session');
const exphbs = require('express-handlebars');
const path = require('path');
const http = require('http');


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

const hbs = exphbs.create({});

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
//for socet.io
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);





app.use(session(sess));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(require('./controllers/'));


//Whenever someone connects this gets executed
io.on('connection', function(socket) {
  console.log('A user connected');

  //Whenever someone disconnects this piece of code executed
  socket.on('disconnect', function () {
     console.log('A user disconnected');
  });
});

// sync sequelize models to the database, then turn on the server
sequelize.sync({force:false}).then(()=>{
  app.listen(PORT, () => {
    console.log(`Server started`);
  });
});
