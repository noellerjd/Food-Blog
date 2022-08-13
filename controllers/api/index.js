// Establishes router to use the .router() portion from express
const router = require("express").Router();

const reviewRoutes = require("./reviewRoutes");

router.use("/reviewRoutes", reviewRoutes);

// exports the router module
module.exports = router;
