const express = require("express");
const path = require("path");
const app = express();

//configuração do EJS como view
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));

//Rota principal
const indexRouter = require("./routes/index");
app.use("/", indexRouter)

//Rotas de categoria
const categoriaRouter = require("./routes/categorias");
app.use("/categorias", categoriaRouter)

const epaRouter = require("./routes/EPA");
app.use("/epa", epaRouter)



const equipeRouter = require("./routes/equipe");
app.use("/equipe", equipeRouter)

const agradecimentosRouter = require("./routes/agradecimentos");
app.use("/agradecimentos", agradecimentosRouter)

const salasRouter = require("./routes/salas");
app.use("/salas", salasRouter)

const sobretecRouter = require("./routes/sobretec");
app.use("/sobretec", sobretecRouter)

//Rodar o server localmente
if (require.main === module) {
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
        console.log(`Servidor em execução - porta ${PORT}`)
    });
}

// Exportar o app para Vercel
module.exports = app;
