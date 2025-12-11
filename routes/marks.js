const express = require('express');
const router = express.Router();

const TC = require('../controller/marks');



router.get('/', TC.pageview);

router.post('/createData', TC.createData);

router.delete('/deleteData/:id', TC.deleteData);

router.patch('/editData/:id', TC.editData);

module.exports = router;
