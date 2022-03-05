const express = require('express');
const { append } = require('express/lib/response');

// set PORT to work with Heroku
const PORT = process.allowedNodeEnvironmentFlags.PORT || 3001;

append.listen(PORT, () => {
    console.log(`Server now available on port ${PORT}`);
});