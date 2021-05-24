var express = require("express");
var router = express.Router();
var Discogs = require("disconnect").Client;
var db = new Discogs({
  userToken: "xmcCMkSInGTQAmVLkSNtqBySpwgUwAPExTRHoINo",
}).database();

// Just initial call
router.get("/releses", function (req, res, next) {
  db.getArtistReleases(req.query.id, {
    page: req.query.page,
    per_page: req.query.per_page,
  }).then(function (release) {
    res.send(release);
  });
});

router.get("/", function (req, res, next) {
  // Just work around to achive the scope of the task
  // Better approch will be let the user select artist from the given list
  // and than show the relese instead of results[0].id :)
  db.search(req.query.search, {
    type: "artist",
  }).then(function (result) {
    if (result.results.length > 0) {
      db.getArtistReleases(result.results[0].id).then(function (release) {
        res.send({ release, id: result.results[0].id });
      });
    } else {
      res.send(release);
    }
  });
});

module.exports = router;
