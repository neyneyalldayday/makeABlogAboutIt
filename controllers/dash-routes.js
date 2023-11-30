const router = require("express").Router()
const {User, Article, Troll} = require("../models");
const withAuth = require("../utils/auth")

router.get("/", withAuth, async (req,res) => {
    try {
       res.render("profile",{layout: "dash"}) 
    } catch (error) {
        console.error(error)
        res.status(500).json(error)
    }
})

module.exports = router