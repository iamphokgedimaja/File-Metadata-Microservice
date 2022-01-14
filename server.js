var express = require('express');
var cors = require('cors');
require('dotenv').config()

var app = express();

app.use(cors());
app.use('/public', express.static(process.cwd() + '/public'));

app.get('/', function (req, res) {
    res.sendFile(process.cwd() + '/views/index.html');
});

/** capture file using multer */
const multer = require("multer")

// API
app.post('/api/fileanalyse', multer().single("upfile") ,(req, res) => {
  const fileDetails = req.file
  res.json({
    name: fileDetails.originalname,
    type: fileDetails.mimetype,
    size: fileDetails.size
  })
});

const port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log('Your app is listening on port ' + port)
});
