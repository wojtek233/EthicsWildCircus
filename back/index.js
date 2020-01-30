const express = require('express');
const cors = require('cors')
const app = express();
const multer = require('multer')
app.use(cors())
const port = 8000;
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());
app.use(express.static('public'));

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './public/pictures')
},
filename: (req, file, cb) => {
  cb(null, Date.now() + '-' +file.originalname )
}
})

const upload = multer({ storage: storage,
                        limits:{fileSize: 1000000}
                      }).single('myImage')

app.post('/api/upload', (req, res) => {
     
  upload(req, res, (err) => {
         if (err instanceof multer.MulterError) {
             return res.status(500).json(err)
         } else if (err) {
             return res.status(500).json(err)
         }
    return res.status(200).send(req.file)
  })
})

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
