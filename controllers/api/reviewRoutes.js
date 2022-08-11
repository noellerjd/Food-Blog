const express = require("express");
const app = express();
const Review = require("../../models/Review");
const router = express.Router();

// gets back all the posts
router.get("/", async (req, res) => {
  try {
    const posts = await Post.find();
  } catch (err) {
    res.json({ message: err });
  }
});
// return the json objects of the review
router.post("/", async (req, res) => {
  const reviewInfo = new Review({
    id: req.body.id,
    user: req.body.user,
    body: req.body.body,
    date: req.body.date,
    likes: req.body.likes,
  });
  console.log(reviewInfo);
  //  add review to database
  db.add(reviewInfo).then((review) => {
    res
      .status(201)
      .json({ review })
      .catch((err) => {
        res.status(500).json({ err });
      });
  });
});

// a way to add posts
// router.post("/", async (req, res) => {
//   const post = new Post({
//     id: req.body.id,
//     user: req.body.user,
//     body: req.body.body,
//     date: req.body.date,
//     likes: req.body.likes,
//   });

//   try {
//     const savedPost = await post.save();
//     res.json(savedPost);
//   } catch (err) {
//     res.json({ message: err });
//   }
// });

// start listening to the server
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`listening on ${port}`));

module.exports = router;
