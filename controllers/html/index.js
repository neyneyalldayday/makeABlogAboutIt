const router = require("express").Router();
const homeRoutes = require("./home-routes.js");


router.use("/home", homeRoutes);

module.exports = router;