const express = require("express");
const app = express();
const expressWs = require("express-ws")(app);

const keyController = require("../controllers/key-controller");

const api = express.Router();

api.get("/test", function(req, res) {
  res.send("TEST Api MM");
});
api.ws("/setkey", keyController.setKey);
api.get("/key/:key", keyController.getKey);

module.exports = api;
