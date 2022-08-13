// Establishes router to use the .router() portion from express
const router = require("express").Router();
// Establises the obj userRoutes to require the userRoutes.js
const userRoutes = require("../userRoutes");

// not completely sure yet
router.use("/users", userRoutes);

// exports the router module
module.exports = router;
