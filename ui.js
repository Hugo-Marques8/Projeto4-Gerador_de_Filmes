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

export function renderProviderFlatrate(logo_path, url) {
    const divProvider = document.querySelector('.provider')
    const divAss = divProvider.querySelector('#onde-assistir')
    if (!divAss) {
        const divAssistir = document.createElement('div')
        divAssistir.id = 'onde-assistir'
        divProvider.appendChild(divAssistir)
        const h3 = document.createElement('h3')
        h3.textContent = 'Assistir'
        divAssistir.appendChild(h3)
        const img = document.createElement('img')
        img.src = `${url}${'w45'}${logo_path}`
        divAssistir.appendChild(img)
    }
    if (divAss) {
        const img = document.createElement('img')
        img.src = `${url}${'w45'}${logo_path}`
        const divAssistir = document.getElementById('onde-assistir')
        divAssistir.appendChild(img)
    }
}

export function renderProviderRent(logo_path, url) {
    const divProvider = document.querySelector('.provider')
    const divAlu = divProvider.querySelector('#onde-alugar')
    if (!divAlu) {
        const divAlugar = document.createElement('div')
        divAlugar.id = 'onde-alugar'
        divProvider.appendChild(divAlugar)
        const h3 = document.createElement('h3')
        h3.textContent = 'Alugar'
        divAlugar.appendChild(h3)
        const img = document.createElement('img')
        img.src = `${url}${'w45'}${logo_path}`
        divAlugar.appendChild(img)
    }
    if (divAlu) {
        const img = document.createElement('img')
        img.src = `${url}${'w45'}${logo_path}`
        const divAlugar = document.getElementById('onde-alugar')
        divAlugar.appendChild(img)
    }
}

export function renderProviderBuy(logo_path, url) {
    const divProvider = document.querySelector('.provider')
    const divCom = divProvider.querySelector('#onde-comprar')
    if (!divCom) {
        const divComprar = document.createElement('div')
        divComprar.id = 'onde-comprar'
        divProvider.appendChild(divComprar)
        const h3 = document.createElement('h3')
        h3.textContent = 'Comprar'
        divComprar.appendChild(h3)
        const img = document.createElement('img')
        img.src = `${url}${'w45'}${logo_path}`
        divComprar.appendChild(img)
    }
    if (divCom) {
        const img = document.createElement('img')
        img.src = `${url}${'w45'}${logo_path}`
        const divComprar = document.getElementById('onde-comprar')
        divComprar.appendChild(img)
    }
}