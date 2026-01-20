export function posterFilme({ poster_path }, url, size) {
    const filmesCard = document.querySelector('.filmes-card');
    filmesCard.replaceChildren()
    const poster = document.createElement('img');
    poster.src = `${url}${size}${poster_path}`
    poster.id = 'poster-fundo';
    filmesCard.appendChild(poster);
}

export function infoFilme({ title, release_date, vote_average, overview }) {
    const filmesInfo = document.querySelector('.filmes-info');
    filmesInfo.replaceChildren()
    const titulo = document.createElement('h2');
    const ul = document.createElement('ul')
    const liAno = document.createElement('li')
    const liGenero = document.createElement('li')
    const liVotes = document.createElement('li')
    const ano = document.createElement('span');
    const genero = document.createElement('span');
    const votes = document.createElement('span');
    const sinopse = document.createElement('p');
    titulo.textContent = title
    ano.textContent = release_date
    votes.textContent = vote_average
    sinopse.textContent = overview
    liAno.appendChild(ano)
    liGenero.appendChild(genero)
    liVotes.appendChild(votes)
    ul.append(liAno, liGenero, liVotes)
    filmesInfo.append(titulo, ul, sinopse)
};
/* genero.textContent = filme.Genre;
sinopse.textContent = filme.Plot;
 */

/*const filmesInfo = document.querySelector('.filmes-info');
    const titulo = document.createElement('h2');
    const ul = document.createElement('ul')
    const liAno =document.createElement('li')
    const liGenero =document.createElement('li')
    const liDuracao =document.createElement('li')
    const ano = document.createElement('span');
    const genero = document.createElement('span');
    const duracao = document.createElement('span');
    const sinopse = document.createElement('p');
    titulo.textContent = filme.Title
    ano.textContent = filme.Year;
    genero.textContent = filme.Genre;
    duracao.textContent = filme.Runtime;
    sinopse.textContent = filme.Plot;
    liAno.appendChild(ano)
    liGenero.appendChild(genero)
    liDuracao.appendChild(duracao)
    ul.append(liAno, liGenero, liDuracao)
    filmesInfo.append(titulo, ul, sinopse)*/