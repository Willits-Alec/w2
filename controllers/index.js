const mongodb = require('../db/connect');
const objectId = require('mongodb').objectId;

const getContacts = async (req, res, next) => {
      const result = await mongodb.getDb().db('CSE-341').collection('Contacts').find();
      result.toArray().then((lists) => {
            res.setHeader('Content-Type', 'application/json');
            res.status(200).json(lists[0]);
      });
};

const getAll1 = async (req, res, next) => {
  const result = await mongodb.getDb().db('CSE-341').collection('Contacts').find();
  result.toArray().then((lists) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(lists);
  });
};

const getAll = async (req, res, next) => {
  try {
    // Use the `await` keyword to asynchronously fetch the data
    const result = await mongodb.getDb().db('CSE-341').collection('Contacts').find().toArray();

    // Set the Content-Type header and send the JSON response
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(result);
  } catch (error) {
    // Handle errors and send an error response if necessary
    console.error('Error fetching data:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const getSingle = async (req, res, next) => {
  const userId = new objectId(req.params.id);
  const result = await mongodb
    .getDb()
    .db()
    .collection('contacts')
    .find({ _id: userId });
  result.toArray().then((lists) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(lists[0]);
  });
};

module.exports = {
    getContacts,
    getAll,
    getAll1,
    getSingle
}