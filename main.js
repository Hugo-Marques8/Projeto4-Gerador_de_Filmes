import { eventBuscarFilmes } from './controller.js';

const state = {
    request: false,
    genre: null,
    select: 'Action',
    resp: null
}
const genres = {
    "Action": 28,
    "Drama": 18,
    "Comedy": 35,
    "Horror": 27,
    "Sci-Fi": 878,   // Ficção Científica
    "Romance": 10749,
    "Thriller": 53,  // Suspense
    "Animation": 16
}
const secaoFilmesInfo = document.querySelector('.filmes-info')
const btnBuscarCritica = document.getElementById('btn-buscar-critica');
const btnBuscarPublico = document.getElementById('btn-buscar-publico');
btnBuscarCritica.addEventListener('click', async () => {
    const sortBy = 'vote_average.desc'
    eventBuscarFilmes(state, genres, sortBy)
})

btnBuscarPublico.addEventListener('click', async () => {
    const sortBy = 'popularity.desc'
    eventBuscarFilmes(state, genres, sortBy)
})


