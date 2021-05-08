// Dependencies
const express = require('express');
const exphbs = require('express-handlebars');
const hbs = exphbs.create({});
const path = require('path');
const sequelize = require('./config/connection');
const http = require('http');
const { Server } = require("socket.io");

// Sets up the Express App
const app = express();
const PORT = process.env.PORT || 3001;
const server = http.createServer(app);
const io = new Server(server);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
app.use(express.static(path.join(__dirname, 'public')));
app.use(require('./controllers'));

//sockit.io start

app.get('/', (req, res) => {
  res.render("index.handlebars")
});

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

// I switched out the server call to connect to the socket.io client. keeping the below code around juuuust incase it causes an issue. which is most certainly will.

// sequelize.sync({ force: false }).then(() => {

//   app.listen(PORT, () => console.log('listening on ' + PORT));
  
// });

server.listen(3001, () => {
  console.log('listening on *:3001');
});
