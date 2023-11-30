const router = require("express").Router()
const {User, Article, Troll} = require("../models");

router.get("/", async (req,res) => {

    try {
        const homeData = await Article.findAll({
            include: [
                {
                 model: User,
                 attributes: ["name"]
                }
            ]
        });       

        const articleArr = homeData.map((article) => article.get({plain: true}))        
        res.render("home", {articleArr})
    } catch (error) {
        res.status(500).json(error)
    }     
});

router.get("/login", async (req,res) => {
    try {
        if(req.session.loggedIn){
            res.redirect("/")
            return;
        } 
            res.render("login")
        
    } catch (error) {
        console.error(error)
        res.status(500).json(error)
    }
    })

router.get("/signup", async (req,res) => {
try {
    if(req.session.loggedIn){
        res.redirect("/");
        return;
    } 
        res.render("signup")
    
} catch (error) {
    console.error(error)
    res.status(500).json(error)
}
})



module.exports = router;