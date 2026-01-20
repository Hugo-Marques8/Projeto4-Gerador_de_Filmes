import { buscarFilme } from "./api.js"
import { posterFilme, infoFilme } from "./ui.js"

export async function eventBuscarFilmes(state, genres, sortBy) {
    const url = 'https://image.tmdb.org/t/p/'
    const size = 'w400'
    const select = document.querySelector('#genero')
    const genreValue = select.value
    console.log(genreValue)
    state.genre = genres[genreValue]
    const page = Math.floor(Math.random() * state.positionPage) + 1
    console.log(page)
    state.trocarPage++
    console.log(state.trocarPage)
    if (state.select !== genreValue) {
        state.trocarPage = 1
         state.positionPage = 20
    }
console.log(state.positionPage)
    console.log(state.trocarPage)
    if (!state.request || state.select !== genreValue || state.trocarPage > 4) {
        console.log(genreValue)
        state.select = genreValue
        state.resp = await buscarFilme(sortBy, state.genre, page)
        state.request = true
        if (state.trocarPage > 4) {
            state.trocarPage = 1
            state.positionPage+=10
        }
    }
    const results = state.resp.results
    console.log(state.resp)
    const filmeSorteado = results[Math.floor(Math.random() * results.length)]
    posterFilme(filmeSorteado, url, size);
    infoFilme(filmeSorteado)
    const secaoFilmesInfo = document.querySelector('.filmes-info')
    secaoFilmesInfo.scrollIntoView({ behavior: 'smooth', block: 'start' })
}






