var express = require('express');
var router = express.Router();

var total;


router.post('/add', function (req, res) {
    console.log(req.body);
    total = [];
    total.push(Number(req.body.numOne) + Number(req.body.numTwo));
  res.sendStatus(200);
  console.log('add');
});


router.post('/subtract', function (req, res) {
    total = [];
    total.push(Number(req.body.numOne) - Number(req.body.numTwo));
    res.sendStatus(200);
    console.log('subtract');
});


router.post('/divide', function (req, res) {
    total = [];
    total.push(Number(req.body.numOne) / Number(req.body.numTwo));
    res.sendStatus(200);
    console.log('divide');
});


router.post('/multiply', function (req, res) {
    total = [];
    total.push(Number(req.body.numOne) * Number(req.body.numTwo));
    res.sendStatus(200);
    console.log('multiply');
});


//this sends it back to the server.js file
router.get('/', function (req, res) {
    res.send(total);
});

module.exports = router;
