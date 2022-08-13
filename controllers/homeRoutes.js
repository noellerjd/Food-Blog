const router = require("express").Router();
const recipes = require("../utils/recipes.json")



router.get("/:id", async (req, res) => {
  const next = req.params.id >= recipes.length-1 ? recipes.length-1 : Number(req.params.id)+1
  const prev = req.params.id <= 0 ? 0 : Number(req.params.id)-1
  const recipe = recipes[req.params.id]
  
  res.render("homepage", {recipe, next, prev});
});
module.exports = router;

