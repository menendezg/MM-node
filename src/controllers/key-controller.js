/**
 * User controller
 * 
 * The REST endpoint should accept GET requests specifying a key and 
 * should return the corresponding value for that key, or an appropriate 
 * HTTP error if the key does not exist.
 * Key-value state should persist between executions of the service 
 * (in other words, if the service shuts down and restarts for some reason, 
 * key-value pairs that were set before the restart should be restored).
 * Multiple simultaneous websocket connections should be possible and should 
 * be allowed to change the state, without concurrency issues.

 */
const redis = require("redis");

port = 6379;
host = "127.0.0.1";
// create and connect redis client to local instance.
const client = redis.createClient(port, host);

client.on("connect", function() {
  console.log("Redis client connected");
});

client.on("error", function(err) {
  console.log("Something went wrong " + err);
});

function getKey(req, res) {
  // just only for test purpose
  client.set("123", "ajdshljfgajlsdf", redis.print);
  const key = req.url.split("/")[2];
  client.get(key, function(error, result) {
    if (error) {
      console.log(error);
      throw error;
    }
    console.log("GET result ->" + result);
  });

  res.status(200).send({
    message: key
  });
}

module.exports = {
  getKey
};
