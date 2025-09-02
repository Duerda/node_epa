const express = require("express");
const router = express.Router();

// listar
router.get("/", async (req, res)=> {
    res.render("base", {
        title: "Usuários",
        view: "epa/show",
    });
});


// editar
router.get("/edit", async (req, res)=> {
    res.render("base", {
        title: "Editar",
        view: "epa/edit",
    });
});


// add
router.get("/add", async (req, res)=> {
    res.render("base", {
        title: "Adicionar",
        view: "epa/add",
    });
});

module.exports = router;