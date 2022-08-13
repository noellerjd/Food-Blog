const router = require("express").Router();

const apiRoutes = require("./api");
const homeRoutes = require("./homeRoutes.js");
const userRoutes = require("./userRoutes");

router.use("/", homeRoutes);
router.use("/api", apiRoutes);
router.use("/user", userRoutes);

module.exports = router;
