const express = require('express');
const app = express();
const godsRoutes = require('./routes/Gods');


app.use('/Gods', godsRoutes);
module.exports = app;