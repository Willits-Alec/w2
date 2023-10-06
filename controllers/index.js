const mongodb = require('../db/connect');
const ObjectId = require('mongodb').ObjectId;

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
  const userId = new ObjectId(req.params.id);
  const result = await mongodb.getDb().db('CSE-341').collection('Contacts').find({ _id: userId }).toArray() 
    res.setHeader('Content-Type', 'application/json');
    res.status(200)
    return res.json(result[0]);
    
};

module.exports = {
    getAll,
    getSingle,
}