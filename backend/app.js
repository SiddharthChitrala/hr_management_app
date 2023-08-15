const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');

const server=require('http').Server(app)

const io=require('socket.io')(server)
const path =require('path')
app.use('/static',express.static('public'))

var routes = require('./routes/routes');

app.use(cors());

app.use(express.json());
app.use(routes);



async function connectToDatabase() {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/hr_management", { useNewUrlParser: true, useUnifiedTopology: true });
    console.log("Connected successfully");
  } catch (error) {
    console.log(error);
  }
}

connectToDatabase();

app.listen(9000, function (error) {
  if (error) {
    console.log(error);
  } else {
    console.log("Connected port");
  }
});