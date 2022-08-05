const express = require('express');
const abc = require('../introduction/intro')
const Welcomeback = require('../logger/logger.js')
const datetime = require('../util/helper.js')
const pr3 = require('../validator/formatter.js')

const router = express.Router();

router.get('/test-me', function (req, res) {
    console.log('My batch is', abc.name)
    abc.printName()
    res.send('My second ever api!')
});

router.get('/test-wel', function (req, res) {
    Welcomeback.Welcome()
    res.send('telcome')
});

router.get('/test-date', function (req, res) {
    console.log(datetime.date);
    datetime.getBatchInfo()
    res.send('date, time , topic studied')
});

router.get('/test-trim', function (req, res) {
    pr3.trim()
    pr3.LowerCase()
    pr3.UpperCase()
    res.send('trim , to lowerCase , toUpperCase')
});







router.get('/test-you', function (req, res) {
    res.send('This is the second routes implementation')
})

router.get('/give-me-students-data', function (req, res) {

})
module.exports = router;
// adding this comment for no reason