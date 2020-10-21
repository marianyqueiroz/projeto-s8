const express = require("express");
const router = express.Router();
const controller = require("../controller/bandasController");

router.get("/bandas", controller.getAll);
router.get("/bandas/:id", controller.getById);
router.get("/bandas/genero/:genero", controller.getByGenero);
router.get("/genero", controller.getAllGeneros);

module.exports = router;

