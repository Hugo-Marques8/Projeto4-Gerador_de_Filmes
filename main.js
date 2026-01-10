import { posterFilme, infoFilme } from './ui.js'
import { buscarFilme } from './API.js'

const btnBuscarCritica = document.getElementById('btn-buscar-critica');
const btnBuscarPublico = document.getElementById('btn-buscar-publico');

btnBuscarCritica.addEventListener('click', async () => {
    const filme = await buscarFilme()
    console.log(filme)
    posterFilme(filme)
    infoFilme(filme)
})


