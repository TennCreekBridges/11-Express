const express = require('express');
const app = express();
// set PORT to work with Heroku
const PORT = process.allowedNodeEnvironmentFlags.PORT || 3001;
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

app.use(express.urlencoded( { extended: true }));
app.use(express.json());
app.use(express.static('public'));
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

app.listen(PORT, () => {
    console.log(`Server now available on port ${PORT}`);
});