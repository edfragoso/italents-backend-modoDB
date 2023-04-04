const express = require('express');
const app = express();
const databaseConnection = require('./src/database/database');

require('dotenv').config();

const PORT = process.env.PORT || 3001;
databaseConnection();

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello, world!');
  });



app.listen(PORT, () => {
    console.log(`Server Running in http://${PORT}`)
});
