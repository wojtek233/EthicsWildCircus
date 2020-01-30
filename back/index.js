const express = require('express');
const cors = require('cors')
const app = express();
//const multer = require('multer')
app.use(cors())
const port = 8000;
const connection = require("./conf");
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());
app.use(express.static('public'));

const perfs = require('./routes/perfs');
const artists = require('./routes/artists');
app.use('/api/perfs', perfs);
app.use('/api/artists', artists);

app.listen(port, (err) => {
  if (err) {
    throw new Error('Something bad happened...');
  }

  console.log(`Server is listening on ${port}`);
});
