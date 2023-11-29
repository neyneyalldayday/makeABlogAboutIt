const router = require("express").Router()
const {User, Article, Troll} = require("../../models");

router.get("/", async (req,res) => {

    try {
        res.render("home")
    } catch (error) {
        res.status(500).json(error)
    }
     
});



module.exports = router;