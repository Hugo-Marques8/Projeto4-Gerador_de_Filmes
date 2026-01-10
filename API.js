export const APIkey = '4e3b41a8'

export async function buscarFilme() {
    const resp = await fetch(`https://www.omdbapi.com/?apikey=${APIkey}&t=Star Wars`)
    return resp.json()
}
