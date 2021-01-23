// dependecies
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const colors = require('colors');

const PORT = process.env.PORT || 2021;

// routes
const positions = require('./routes/positions');

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true} ));

// routes
app.use('/api/get/positions', positions);

// development status
app.listen(PORT, () => {
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold);
});
