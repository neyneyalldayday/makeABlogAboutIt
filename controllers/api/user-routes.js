const {User, Article, Troll} = require("../../models");
const router = require("express").Router();


//create user route
router.use("/", async (req, res) => {
    try {
        
    } catch (err) {
        console.error(err)
        res.status(500).json()
    }
});

router.use("/login", async (req, res) => {
    try {
        
    } catch (err) {
        console.error(err)
        res.status(500).json()
    }
});



module.exports = router;