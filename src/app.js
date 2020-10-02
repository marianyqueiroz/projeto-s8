// 1. Importar o express;
// 2. Criar o app a partir do express;
// 3. Criar a rota;
// 4. Usar a rota criada;
// 5. Exportar o app.


const express = require("express");
const app = express();

const musicas  = require("./routes/musicasRoutes");

app.use("/", musicas);

module.exports = app;