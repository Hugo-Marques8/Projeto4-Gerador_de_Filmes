export const url = 'https://image.tmdb.org/t/p/'
export const size = 'w400'
export const APIkey = '40a95f716f44a9ee8fca3dd6dd9355d7'
export async function buscarFilme(sortBy, genre, page) {
    const response = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${APIkey}&language=pt-BR&sort_by=${sortBy}&vote_count.gte=500&watch_region=BR&with_watch_monetization_types=flatrate,rent,buy&include_adult=false&with_genres=${genre}&page=${page}`);
    return response.json()
}

export async function buscarProvide(id) {
    const response = await fetch(`https://api.themoviedb.org/3/movie/${id}/watch/providers?api_key=${APIkey}`)
    return response.json()
}
