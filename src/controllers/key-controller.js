/**
 * Controllers
 */
const redis = require("redis");
const redisClient = require("../config/redis-config");
redisHandler = redisClient(6379, "127.0.0.1");

function getKey(req, res) {
  const key = req.url.split("/")[2];
  console.log(key)
  redisHandler.get(key, function(error, result) {
    if (error) {
      console.log(error);
      throw error;
    }
    if (result === null ){
      res.status(404).send({
        message: "Sorry, we dont have a value for that key"
      })
    }
    console.log("GET result ->" + result);
    res.status(200).send({
      key: result
    });
  });

}

function setKey(ws, req) {
  ws.on("message", function(msg) {
    objReceived = JSON.parse(msg);
    redisHandler.set(objReceived.key, objReceived.value, redis.print);
  });
  console.log("socket", "connected");
}

module.exports = {
  getKey,
  setKey
};
