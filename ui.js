export function posterFilme(filme) {
    const section = document.querySelector('.section-hidden');
    section.classList.remove('section-hidden');
    const filmesCard = document.querySelector('.filmes-card');
    const poster = document.createElement('img');
    poster.src = `${filme.Poster}`;
    poster.id = 'poster-fundo';
    filmesCard.appendChild(poster);
}

export function infoFilme(filme) {
    const filmesInfo = document.querySelector('.filmes-info');
    const titulo = document.createElement('h2');
    titulo.textContent = filme.Title
    const ano = document.createElement('span');
    const genero = document.createElement('span');
    const duracao = document.createElement('span');
     const sinopse = document.createElement('p');
    ano.textContent = filme.Year;
    genero.textContent = filme.Genre;
    duracao.textContent = filme.Runtime;
    sinopse.textContent = filme.Plot;
    filmesInfo.append(titulo, ano, genero, duracao, sinopse)
}