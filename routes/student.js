const express = require('express');
const router = express.Router();

const TC = require('../controller/student');
const AUTH = require('../middleware/auth')


router.get('/', AUTH.AuthTest ,TC.pageview);

router.post('/createData', AUTH.AuthTest ,TC.createData);

router.delete('/deleteData/:id', TC.deleteData);

router.patch('/editData/:id', TC.editData);

module.exports = router;
