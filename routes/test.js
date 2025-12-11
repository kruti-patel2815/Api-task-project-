const express = require('express');
const router = express.Router();
const multer = require('multer');
const TC = require('../controller/test');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './public/images/')
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    cb(null, file.fieldname + '-' + uniqueSuffix)
  }
})

const upload = multer({ storage: storage })

router.get('/', TC.pageview);

router.post('/createData', upload.single('profile'), TC.createData);

router.delete('/deleteData/:id', TC.deleteData);

router.patch('/editData/:id', TC.editData);

module.exports = router;
