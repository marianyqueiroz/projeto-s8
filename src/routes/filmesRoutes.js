const express = require("express");
const router = express.Router();
const controller = require("../controller/filmesController");

router.get("/filmes", controller.getAll);
router.get("/filmes/:id", controller.getById);
router.get("/filmes/direcao/:direcao", controller.getByDirection);
router.get("/direcao", controller.getAllDirections);

module.exports = router;

