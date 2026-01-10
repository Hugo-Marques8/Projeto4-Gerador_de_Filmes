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
    filmesInfo.append(titulo, ul, sinopse)
};


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