// const app = require("./src/app")

// 1. Importar app;
// 2. Declarar a variável;
// 3. "Escutar" o app mostrando no console qual o caminho está usando.


const app = require("./src/app");
const port = 8000;

app.listen(port, () => {
    console.log(`Requisição realizada com sucesso em http://localhost:${port}`);
});