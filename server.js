const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const mongodb = require('./db/connect');
const port = 8080;
const app = express();


app.use('/', require('./routes/index'))

mongodb.initDb((err, mongodb) =>{
  if (err) {
    console.log(err);
  } else {
    app.listen(port);
      console.log('connected to DB');
  }
});


//MONGODB_URI=mongodb+srv://Awillits:@cluster0.pnpy51q.mongodb.net/