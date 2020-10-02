// const { Router } = require("express");

// 1.Importar o express;
// 2. Importar o Router;
// 3. Importar o controller;
// 4. Criar a rota que traz todos os itens;
// 5. Exportar o Router.


const express = require("express");
const router = express.Router();
const controller = require("../controller/musicasController");

router.get("/musicas", controller.getAll);
router.get("/musicas/:id", controller.getById);
router.get("/musicas/artistas/:artista", controller.getByArtists)
router.get("/artistas", controller.getAllArtists);

module.exports = router;