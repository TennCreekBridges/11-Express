// required
const router = require('express').Router();
const notes = require('../../db/db.json');
const { v4: uuidv4 } = require('uuid');

// GET request for notes from db.json
router.get('/notes', (req, res) => {
    res.json(notes);
});

// POST request to notes at db.json & sets random ID
router.post('/notes', (req, res) => {
    req.body.id = uuidv4();
    notes.push(req.body)
    res.sendFile(__dirname + notes);
    res.json(req.body);
});

module.exports = router;