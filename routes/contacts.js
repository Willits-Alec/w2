const express = require('express');
const router = express.Router();
const mainController = require('../controllers/index');
const Contact = require('../models/contact');

router.get('/', mainController.getAll);

router.get('/:id', mainController.getSingle);

router.get('/contacts', async (req, res) =>{
    try {
        // const contacts = await Contact.find();
        const contacts = await Contact.findOne({ _id: '650e2cbd9e6bc3d57269f9dc' });
        console.log('After querying database, contacts:', contacts);

        res.json(contacts);
    } catch (error) {
        console.error('Error fetching contacts:', error);
        res.status(500).json({error: 'Internal Server Error'});
    }
});




module.exports = router;

