

// var express = require('express');
// var app = express();
// var multer = require('multer')
// var cors = require('cors');


// app.use(cors())

// var storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//   cb(null, 'public')
// },
// filename: function (req, file, cb) {
//   cb(null, Date.now() + '-' +file.originalname )
// }
// })

// var upload = multer({ storage: storage }).single('file')
 
 
// app.post('/upload',function(req, res) {
     
//   upload(req, res, function (err) {
//          if (err instanceof multer.MulterError) {
//              return res.status(200).json(err)
//          } else if (err) {
//              return res.status(200).json(err)
//          }
//     return res.status(200).send(req.file)

//   })

// });


// app.listen(3001, function() {

//     console.log('App running on port 3001');

// });