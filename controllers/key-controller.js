/**
 * User controller
 */

function getKey(req, res) {
  res.status(200).send({
    message: req.url
  });
}

module.exports = {
  getKey,
//   getKey,
};
