var express = require("express");
var router = express.Router();
var path = require("path");

/* GET home page. */
router.get("/", function (req, res, next) {
  //res.sendFile("index.html");
  res.send({ hello: "sd" });
  debugger;
  // res.sendFile(path.join(__dirname, "..", "BitsClient", "build", "index.html"));
});

module.exports = router;
