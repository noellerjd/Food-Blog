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
    res.status(600).json(err);
  }
});
// return the json objects of the review
router.post("/", async (req, res) => {
  try {
    const reviewInfo = await Review.create({
      id: req.body.id,
      // userName: req.body.userName,
      reviewBody: req.body.reviewBody,
      // recipe: req.body.recipe,
      // date: req.body.date,
      // likes: req.body.likes,
      // stars: req.body.stars,
    });
    res.status(200).json(reviewInfo);
    console.log(reviewInfo);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
