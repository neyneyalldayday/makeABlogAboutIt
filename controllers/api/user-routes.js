const { User } = require("../../models");
const router = require("express").Router();
//create user route
router.post("/", async (req, res) => {
    try {
       const newDude = await User.create({
        name: req.body.name,
        email: req.body.email, 
        password: req.body.password       
       })

       req.session.save(() => {
        req.session.user_id = newDude.id;
        req.session.name = newDude.name;
        req.session.loggedIn= true;

        res.status(200).json(newDude);

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

       const validPass = oldDude.peepPassWord(req.body.password);

       if (!validPass) {
        res.status(400).json({message: "email or password incorrect"});
        return;
       }

       req.session.save(() => {
        req.session.user_id = oldDude.id;
        req.session.name = oldDude.name;
        req.session.loggedIn= true;

        res.status(200).json(oldDude);

       })
    } catch (err) {
        console.error(err)
        res.status(500).json(err)
    }
});

router.post("/logout", (req,res) => {
    if (req.session.loggedIn){
        req.session.destroy(() => {
            res.status(204).end()
        })
    } else {
        res.status(404).end();
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

module.exports = router;