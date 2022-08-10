const express = require("express");
const app = express();
// const post = require("../models/BlogPost");
const router = express.Router();

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

// connect to db
// const { MongoClient, ServerApiVersion } = require("mongodb");
// const { Router } = require("express");
// const uri =
//   "mongodb+srv://Augustus:Creative95@cluster0.nhoq4zv.mongodb.net/?retryWrites=true&w=majority";
// const client = new MongoClient(
//   uri,
//   {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     serverApi: ServerApiVersion.v1,
//   },
//   () => console.log("connected")
// );
// client.connect((err) => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   client.close();
// });

// start listening to the server
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`listening on ${port}`));
