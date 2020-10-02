// 1. Importar o JSON de músicas;
// 2. Criar métodos para buscar músicas;
// 3. Exportar métodos.


const musicas = require("../model/musicas.json");
const artistas = require("../model/artistas.json");

const getAll = (req, res) => {
    console.log(req.url);
    res.status(200).send(musicas);
};


// 1. Criar método GetById
// 2. Retornar o item daquele Id


const getById = (req, res) => {
    const id = req.params.id;

    const musicaFiltrada = musicas.find((musicas) => musicas.id == id);
    res.status(200).send(musicaFiltrada);
};


// 1. Criar método GetAllArtists;
// 2. Filtrar lista de músicas por artistas.


// const getAllArtists = (req, res) => {
//     const artistas = req.params.artistas;
//     const artistasFiltrados = musicas.filter((musicas) => musicas.artistas == artistas);
//     console.log(artistas);
//     res.status(200).send(artistasFiltrados);
// };


const getByArtists = (req, res) => {
    const artista = req.params.artista;
    const artistaFiltrado = musicas.filter((musicas) => musicas.artista == artista);
    console.log(artista);
    res.status(200).send(artistaFiltrado);
};

const getAllArtists = (req, res) => {
    const artista = musicas.map((musicas) => musicas.artista);
    console.log(artista);
    res.status(200).send(artista);
};


module.exports = { getAll, getById, getByArtists, getAllArtists };