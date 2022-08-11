const router = require("express").Router();
const recipes = require("../utils/test.json")



router.get("/", async (req, res) => {
  res.render("homepage", {recipes});
});
module.exports = router;
