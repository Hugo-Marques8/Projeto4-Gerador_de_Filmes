import { ondeAssistir } from './controller.js';
import { eventBuscarFilmes } from './controller.js';

const state = {
    request: false,
    genre: null,
    select: 'Action',
    resp: null,
    id: null,
    trocarPage: 0,
    positionPage: 20
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
    await eventBuscarFilmes(state, genres, sortBy)
    ondeAssistir(state)
})

btnBuscarPublico.addEventListener('click', async () => {
    const sortBy = 'popularity.desc'
    await eventBuscarFilmes(state, genres, sortBy)
    ondeAssistir(state)
})


