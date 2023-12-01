const router = require("express").Router()
const {User, Article, Troll} = require("../models");
const withAuth = require("../utils/auth")

router.get("/",  async (req,res) => {
    try {
        const profileData = await User.findOne( {   
            where: {name: req.params.name},
            include : [Article]          
        });

        res.status(200).json(profileData)

        const proflieArr = profileData.map((data) => data.get({plain: true}));
        console.log(proflieArr)
       res.render("profile",{
        layout: "dash",
        proflieArr
    }) 
    } catch (error) {
        console.error(error)
        res.status(500).json(error)
    }
})

module.exports = router