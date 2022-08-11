const express = require("express");
const app = express();
const Review = require("../../models/Review");
const router = express.Router();

// gets back all the posts
router.get("/", async (req, res) => {
  try {
    const reviews = await Review.findAll({
      Where: {
        recipe: req.body.recipe,
      },
    });
    res.status(200).json(reviews);
  } catch (err) {
    res.status(500).json(err);
  }
});
// return the json objects of the review
router.post("/", async (req, res) => {
  try {
    const reviewInfo = await Review.create({
      id: req.body.id,
      user: req.body.user,
      body: req.body.body,
      recipe: req.body.recipe,
      date: req.body.date,
      likes: req.body.likes,
      stars: req.body.stars,
    });
    res.status(200).json(reviewInfo);
    console.log(reviewInfo);
  } catch (err) {
    res.status(500).json(err);
  }
});

// start listening to the server
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`listening on ${port}`));

module.exports = router;
