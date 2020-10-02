const filmes = require("../model/filmes.json");
const direcao = require("../model/direcao.json");

const getAll = (req, res) => {
    console.log(req.url);
    res.status(200).send(filmes);
};

const getById = (req, res) => {
    const id = req.params.id;

    const filmeFiltrado = filmes.find((filmes) => filmes.id == id);
    res.status(200).send(filmeFiltrado);
};

const getByDirection = (req, res) => {
    const direcao = req.params.direcao;
    const direcaoFiltrada = filmes.filter((filmes) => filmes.direcao == direcao);
    res.status(200).send(direcaoFiltrada);
};

const getAllDirections = (req, res) => {
    const direcao = filmes.map((filmes) => filmes.direcao);
    res.status(200).send(direcao);
};

module.exports = { getAll, getById, getByDirection, getAllDirections }