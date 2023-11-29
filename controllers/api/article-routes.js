const { Article } = require("../../models")
const router = require("express").Router();


router.get("/allArticles", async (req, res) => {
    try {
       const sadPostData = await Article.findAll();
       res.status(200).json(sadPostData);
    } catch (err) {
        console.error(err)
        res.status(500).json(err)        
    }
})
router.post("/", async (req, res) => {
    try {
     const sadPostData = await Article.create(req.body);
     res.status(200).json(sadPostData)  
    } catch (err) {
        console.error(err)
        res.status(500).json(err)
        
    }
})
router.put("/", async (req, res) => {
    try {
       const sadPostData = await Article.update(req.body, {
       where:{ name: req.params.name  }
       }) 
       if(!sadPostData){
        res.status(400).json({ message: "no user with that name"})
       }

       res.status(200).json(sadPostData)
    } catch (err) {
        console.error(err)
        res.status(500).json(err)
        
    }
})
router.delete("/", async (req, res) => {
    try {
      const sadPostData = await Article.destroy({
        where: { name: req.params.name }
      })  
      res.status(200).json({sadPostData, message: "article deleted"})
    } catch (err) {
        console.error(err)
        res.status(500).json(err)        
    }
})


module.exports = router