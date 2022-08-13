const express = require("express");
const app = express();
// const post = require("../models/BlogPost");
const router = express.Router();

const reviewInfo = req.body;

function postReview() {
  // return the json objects of the review
  router.post("/", async (req, res) => {
    const review = new Review({
      id: req.body.id,
      user: req.body.user,
      body: req.body.body,
      date: req.body.date,
      likes: req.body.likes,
    });
    // pass in the json objects as parameters
    //  add post to database
    db.add(reviewInfo).then((review) => {
      res
        .status(201)
        .json({ review })
        .catch((err) => {
          res.status(500).json({ err });
        });
    });
  });
}
// a way to add posts
router.post("/", async (req, res) => {
  const post = new Post({
    id: req.body.id,
    user: req.body.user,
    post_description: req.body.post_description,
    post_date: req.body.post_date,
    likes: req.body.likes,
  });

  try {
    const savedPost = await post.save();
    res.json(savedPost);
  } catch (err) {
    res.json({ message: err });
  }
});

// gets back all the posts
router.get("/", async (req, res) => {
  try {
    const posts = await Post.find();
  } catch (err) {
    res.json({ message: err });
  }
});

// start listening to the server
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`listening on ${port}`));
