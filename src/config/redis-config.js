const redis = require("redis");
module.exports = (port, host) => {
  const client = redis.createClient(port, host);
  client.on("connect", function() {
    console.log("Redis client connected");
  });

  client.on("error", function(err) {
    console.log("Something went wrong " + err);
  });
  return client;
};
