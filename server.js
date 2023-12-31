const express = require('express');
const mongodb = require('./db/connect');
const app = express();
app.use('/', require('./routes/index'));
const port = process.env.PORT || 8080;
// const bodyParser = require('body-parser');
// const MongoClient = require('mongodb').MongoClient;
// const mongoose = require('mongoose');

// app
//   .use(bodyParser.json())
//   .use((req, res, next) => {
//     res.setHeader('Access-Control-Allow-Origin', '*');
//     next();
//   })

mongodb.initDb((err, mongodb) =>{
  if (err) {
    console.log(err);
  } else {
    app.listen(port);
      console.log(`Connected to DB and listening on ${port}`);
  }
});


