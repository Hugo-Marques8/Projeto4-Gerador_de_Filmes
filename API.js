export const APIkey = '4e3b41a8'

export async function buscarFilme() {
    const resp = await fetch(`http://www.omdbapi.com/?apikey=${APIkey}&t=The Dark Knight`)
    return resp.json()
}
