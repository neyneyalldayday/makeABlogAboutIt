const {User, Article, Troll} = require("../../models");
const router = require("express").Router();


//create user route
router.post("/", async (req, res) => {
    try {
        const userData = await User.findAll({
            include: [{model:Article}, {model:Troll}]
        })
        res.json(userData)
    } catch (err) {
        console.error(err)
        res.status(500).json()
    }
});

//just for testing
router.get("/all", async (req, res) => {
    try {
        
    } catch (err) {
        console.error(err)
        res.status(500).json()
    }
});

router.post("/login", async (req, res) => {
    try {
        
    } catch (err) {
        console.error(err)
        res.status(500).json()
    }
});



module.exports = router;