import { buscarFilme } from "./API.js"
import { posterFilme, infoFilme } from "./ui.js"

export async function eventBuscarFilmes(state, genres, sortBy) {
    const url = 'https://image.tmdb.org/t/p/'
    const size = 'w400'
    const select = document.querySelector('#genero')
    const genreValue = select.value
    console.log(genreValue)
    state.genre = genres[genreValue]
    const page = Math.floor(Math.random() * 50) + 1
    if (!state.request || state.select !== genreValue) {
        console.log(genreValue)
        state.select = genreValue
        state.resp = await buscarFilme(sortBy, state.genre, page)
        state.request = true
    }
    const results = state.resp.results
    const filmeSorteado = results[Math.floor(Math.random() * results.length)]
    posterFilme(filmeSorteado, url, size);
    infoFilme(filmeSorteado)
    const secaoFilmesInfo = document.querySelector('.filmes-info')
    secaoFilmesInfo.scrollIntoView({ behavior: 'smooth', block: 'start' })
    console.log(results)
}






