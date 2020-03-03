const express = require('express')
const keyController = require('../controllers/key-controller')

const api = express.Router();

api.get("/test", function(req, res){
    res.send("TEST Api MM");
});

api.get('/key/:key', keyController.getKey)

module.exports = api;