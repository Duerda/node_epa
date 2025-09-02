
const express = require("express");
const router = express.Router();

//página inicial
router.get("/", async (req, res) => {
    res.render("base", {
        title: "Integrantes da Equipe",
        view: "equipe",
    });
});

module.exports = router;
