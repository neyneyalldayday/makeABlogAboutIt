const router = require("express").Router();

const userRoutes = require("./user-routes.js");
const articleRoutes = require("./article-routes.js");
const trollRoutes = require("./troll-routes.js");

router.use("/users", userRoutes);
router.use("/articles", articleRoutes);
router.use('/trolls', trollRoutes);

module.exports = router;