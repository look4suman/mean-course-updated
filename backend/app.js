const express = require('express');
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const posts = require('./posts');

const app = express();

//mongoose connection
mongoose
  .connect(
    "mongodb+srv://look4suman:foSZeVv42aY6OmSR@cluster0.avum5.mongodb.net/node-angular?retryWrites=true&w=majority",
    {useUnifiedTopology: true, useNewUrlParser: true}
  )
  .then(() => {
    console.log("Connected to database!");
  })
  .catch((err) => {
    console.log(err + "Connection failed!");
  });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, PUT, DELETE, OPTIONS"
  );
  next();
});

app.use((req, res, next) => {
  console.log('dummy middleware');
  next();
});

app.use('/api/post', posts);

module.exports = app;
