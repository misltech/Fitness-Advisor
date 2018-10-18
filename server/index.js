const express = require('express');
const game = require('./server/controller');

const app = express();

const port = 3000;
const server = "localhost";

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use("/", express.static(__dirname + "/../client/"));
//app.use('/game', game);

app.listen(port);

console.log(`listening on: http://${server}:${port}`);