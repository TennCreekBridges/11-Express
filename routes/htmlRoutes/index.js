// required components
const path = require('path');
const router = require('express').Router();

// routes
router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/notes.html'));
});

// nonsensical comment 2