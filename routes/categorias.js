const express = require("express");
const router = express.Router();

//página categorias
router.get("/", async (req, res) => {
    res.render("base", {
        title: "Categorias",
        view: "categorias",
    });
});

module.exports = router;
