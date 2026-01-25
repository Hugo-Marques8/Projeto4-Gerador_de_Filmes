import { renderProviderFlatrate, renderProviderRent, renderProviderBuy } from "./ui.js"
import { url } from "./api.js"

export function tratarDados(flatrate, rent, buy) {
    const divProvider = document.querySelector('.provider')
    divProvider.replaceChildren()
    flatrate.map(provider => {
        const { logo_path } = provider
        renderProviderFlatrate(logo_path, url)
    })
    rent.map(provider => {
        const { logo_path } = provider
        renderProviderRent(logo_path, url)
    })
    buy.map(provider => {
        const { logo_path } = provider
        renderProviderBuy(logo_path, url)
    })
}