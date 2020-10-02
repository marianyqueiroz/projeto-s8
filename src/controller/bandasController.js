const bandas = require("../model/bandas.json");
const genero = require("../model/genero.json");

const getAll = (req, res) => {
    console.log(req.url);
    res.status(200).send(bandas);
};

const getById = (req, res) => {
    const id = req.params.id;

    const bandaFiltrada = bandas.find((bandas) => bandas.id == id);
    res.status(200).send(bandaFiltrada);
};

const getByGenero = (req, res) => {
    const genero = req.params.genero;
    const generoFiltrado = bandas.filter((bandas) => bandas.genero == genero);
    res.status(200).send(generoFiltrado);
};

const getAllGeneros = (req, res) => {
    const genero = bandas.map((bandas) => bandas.genero);
    console.log(genero);
    res.status(200).send(genero);
};

module.exports = { getAll, getById, getByGenero, getAllGeneros };