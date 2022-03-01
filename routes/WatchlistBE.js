var express = require('express');
var router = express.Router();
const db = require("../model/helper");

/* GET watchlist */
router.get('/', async (req, res) => {
  try {
    let result = await db("SELECT * FROM Movieinfo;").then(results => {
      res.send(results.data);
    }
    );
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
});

router.post("/", async (req, res)=> {
  let { FilmID, Title, PosterUrl } = req.body;
  console.log("HHH", req.body)
  let sql = `INSERT INTO Movieinfo (FilmID, Title, PosterUrl) VALUES (${FilmID}, '${Title}', '${PosterUrl}');`;

  try {
    await db(sql);
    let result = await db("SELECT * FROM MovieInfo");
    res.send(result.data);
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
});

module.exports = router;


