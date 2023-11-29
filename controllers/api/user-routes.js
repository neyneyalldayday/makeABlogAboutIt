const {User, Article, Troll} = require("../../models");
const router = require("express").Router();


//create user route
router.post("/", async (req, res) => {
    try {
       const newDude = await User.create({
        name: req.body.name,
        email: req.body.email,        
       })

       req.session.save(() => {
        req.session.user_id = newDude.id;
        req.session.name = newDude.name;
        req.session.loggedIn= true;

        res.status(200).json(userData);

       })
    } catch (err) {
        console.error(err)
        res.status(500).json(err)
    }
});
router.post("/login", async (req, res) => {
    try {
       const oldDude = await User.findOne({
        where:{ name: req.body.name }        
       })

       if(!oldDude){
        res.status(404).json({message: "no user with that name"})
       }

       const validPass = oldDude.checkPassword

       req.session.save(() => {
        req.session.user_id = newDude.id;
        req.session.name = newDude.name;
        req.session.loggedIn= true;

        res.status(200).json(userData);

       })
    } catch (err) {
        console.error(err)
        res.status(500).json(err)
    }
});

//just for testing
router.get("/all", async (req, res) => {
    try {
        const users = await User.findAll()
        res.json(users)
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