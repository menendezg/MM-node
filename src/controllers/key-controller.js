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

function getKey(req, res) {
    const key = req.url.split("/")[2]
  
  
    res.status(200).send({
    message: key
  });
}

module.exports = {
  getKey
};
