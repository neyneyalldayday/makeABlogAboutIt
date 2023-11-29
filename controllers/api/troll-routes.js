const { Troll } = require("../../models");
const router = require("express").Router();

router.get("/all", async (req, res) => {
    try {
   const trolls = await Troll.findAll();
   res.json(trolls)
    } catch (hands) {
        console.error(hands);
        res.status(500).json(hands)        
    }
});

router.post("/", async (req, res) => {
    try {
        const trollData = await Troll.create(req.body);
        res.json(trollData);
    } catch (hands) {
        console.error(hands);
        res.status(500).json(hands)        
    }
});

router.put("/:trollId", async (req, res) => {
    try {
        const trollData = await Troll.update(req.body, {
            where: {id : req.params.trollId}
        })
        if(!trollData){
            res.status(400).json({message: "cant find this comment"})
        }

        res.status(200).json(trollData)
    } catch (hands) {
        console.error(hands);
        res.status(500).json(hands)
        
    }
});

router.delete("/:trollId", async (req, res) => {
    try {
       const trollData = await Troll.destroy({
        where: { id : req.params.trollId }
       }) 
       res.json(trollData);
    } catch (hands) {
        console.error(hands);
        res.status(500).json(hands)
        
    }
});

module.exports = router