const express = require('express');
const lodash = require('lodash');

const abc = require('../introduction/intro')
const Welcomeback = require('../logger/logger.js')
const datetime = require('../util/helper.js')
const pr3 = require('../validator/formatter.js')

const router = express.Router();

router.get('/test-me', function (req, res) {
    console.log('My batch is', abc.name)
    abc.printName()
let month =  ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec']
let result =  lodash.chunk(month, 3);
console.log(result);
let odd = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19]
let oddres = lodash.tail(odd);
console.log(oddres);
let one = [1,2,3]
let two = [ 3,4,5]
let three = [5,7,6]
let four = [ 7,9,11,10]
let five = [ 13,12,10,2]
let unionRes = lodash.union(one,two,three,four,five)
console.log(unionRes);
let q = ["ram ", 'sita']
let w = [ "sharukh ", ' salmaln']
let e = [ 'bjp', 'cong']
let pairRes = lodash.fromPairs([q,w,e])
console.log(pairRes);

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