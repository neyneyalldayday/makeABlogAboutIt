const {User, Article, Troll} = require("../../models");
const router = require("express").Router();




router.get("/", async (req, res) => {
    try {
        
    } catch (hands) {
        console.error(hands);
        res.status(500).json(hands)
        
    }
})
router.post("/", async (req, res) => {
    try {
        
    } catch (hands) {
        console.error(hands);
        res.status(500).json(hands)
        
    }
})
router.put("/", async (req, res) => {
    try {
        
    } catch (hands) {
        console.error(hands);
        res.status(500).json(hands)
        
    }
})
router.delete("/", async (req, res) => {
    try {
        
    } catch (hands) {
        console.error(hands);
        res.status(500).json(hands)
        
    }
})



module.exports = router