//sever set up

const express = require('express');
const routes = require('./controllers');
const sequelize = require('./config/connection');
const path = require('path');
const http = require('http');
const { Server } = require("socket.io");



// helper function
const helpers = require('./utils/helpers');

// handlebars
const exphbs = require('express-handlebars');
const hbs = exphbs.create({helpers});

// session connection to sequelize database
const session = require('express-session');

const app = express();
const PORT = process.env.PORT || 3001;
const server = http.createServer(app);
const io = new Server(server);


const SequelizeStore = require('connect-session-sequelize')(session.Store);

const sess = {
  secret: 'Super secret secret',
  cookie: {maxAge: 36000},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};

app.use(session(sess));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));


// app.get('/', (req, res) => {
//     //  res.sendFile(__dirname + 'dashboard.handlebars');
//       res.render("dashboard.handlebars")
// });



io.on('connection', (socket) => {

    console.log('a user connected');

  socket.on('disconnect', () => {
      console.log('user disconnected');
  });

  socket.on('chat message', (msg) => {
    console.log('message: ' + msg);
  });


  socket.on('chat message', (msg) => {
    io.emit('chat message', msg);
  });
});

// set Handlebars as the default template engine
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

// turn on routes
app.use(routes);


//turn on connection to db and server
// sequelize.sync({ force: false }).then(() => {
//    app.listen(PORT, () => console.log('Now listening on: ' + PORT));
// });

server.listen(PORT, () => {
  console.log('listening on ' + PORT);
});

