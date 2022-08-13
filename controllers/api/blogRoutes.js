const router = require("express").Router();

const e = require("express");
const Connection = require("mysql2/typings/mysql/lib/Connection");
const { Post } = require("../../models/BlogPost");

const showPost = async () => {
  const sql = "SELECT * FROM posts";
  Connection.query(sql, (err, result) => {
    if (err) throw console.error();
    console.table(result);
  });
};

// Create a new post
router.post("/post", async (req, res) => {
  try {
    const dbPostData = await Post.create({
      username: req.body.username,
      title: req.body.title,
      description: req.body.description,
    });

    const sql =
      "INSERT INTO posts (id, user, post_description, post_date) VALUES (?, ?, ?, ?)";
    const vals = [
      req.body.id,
      req.body.username,
      req.body.title,
      req.body.description,
      req.body.likes,
    ];

    Connection.query(sql, vals, (err, res) => {
      if (err) throw console.error();
      console.log(`Successfully added post titled ${req.body.title}`);
      console.log(`\n`);
      console.table(showPost());
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
