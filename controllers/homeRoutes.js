const router = require("express").Router();
const recipes = require("../utils/recipes.json");
const withAuth = require("../utils/auth");

router.get("/", withAuth, async (req, res) => {
  try {
    const userData = await User.findAll({
      attributes: { exclude: ["password"] },
      order: [["name", "ASC"]],
    });

    const users = userData.map((project) => project.get({ plain: true }));

    res.render("/0", {
      users,
      // Pass the logged in flag to the template
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/:id", async (req, res) => {
  const next =
    req.params.id >= recipes.length - 1
      ? recipes.length - 1
      : Number(req.params.id) + 1;
  const prev = req.params.id <= 0 ? 0 : Number(req.params.id) - 1;
  const recipe = recipes[req.params.id];

  res.render("homepage", { recipe, next, prev });
});
module.exports = router;
