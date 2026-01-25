import { tratarDados } from "./adapter.js"
import { buscarFilme, buscarProvide, url } from "./api.js"
import { posterFilme, infoFilme } from "./ui.js"

export async function eventBuscarFilmes(state, genres, sortBy) {
    const url = 'https://image.tmdb.org/t/p/'
    const size = 'w400'
    const select = document.querySelector('#genero')
    const genreValue = select.value
    state.genre = genres[genreValue]
    const page = Math.floor(Math.random() * state.positionPage) + 1
    state.trocarPage++
    if (state.select !== genreValue) {
        state.trocarPage = 1
        state.positionPage = 20
    }
    if (!state.request || state.select !== genreValue || state.trocarPage > 4) {
        state.select = genreValue
        state.resp = await buscarFilme(sortBy, state.genre, page)
        state.request = true
        if (state.trocarPage > 4) {
            state.trocarPage = 1
            state.positionPage += 10
        }
    }
    const results = state.resp.results
    const filmeSorteado = results[Math.floor(Math.random() * results.length)]
    console.log(filmeSorteado)
    state.id = filmeSorteado.id
    console.log(state.id)
    posterFilme(filmeSorteado, url, size);
    infoFilme(filmeSorteado)
    const secaoFilmesInfo = document.querySelector('.filmes-card')
    secaoFilmesInfo.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

export async function ondeAssistir(state) {
    const id = state.id
    const dados = await buscarProvide(id)
    const { BR: { flatrate, rent, buy } } = dados.results
    console.log(dados.results.BR)
    tratarDados(flatrate, rent, buy)
}








