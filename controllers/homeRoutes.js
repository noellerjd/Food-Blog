const router = require("express").Router();
const { User } = require("../models");

const recipes = require("../utils/recipes.json");
const withAuth = require("../utils/auth");

router.get("/", async (req, res) => {
  try {
    const userData = await User.findAll({
      attributes: { exclude: ["password"] },
      order: [["username", "ASC"]],
    });

    const users = userData.map((project) => project.get({ plain: true }));

    res.redirect("/0");

    res.render("homepage", {
      ...users,
      // Pass the logged in flag to the template
      loggedIn: req.session.loggedIn,
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

  res.render("homepage", {
    recipe,
    next,
    prev,
    loggedIn: req.session.loggedIn,
  });
});
module.exports = router;
