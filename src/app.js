// 1. Importar o express;
// 2. Criar o app a partir do express;
// 3. Criar a rota;
// 4. Usar a rota criada;
// 5. Exportar o app.


const express = require("express");
const app = express();

const bandas  = require("./routes/bandasRoutes");

app.use("/", bandas);

module.exports = app;