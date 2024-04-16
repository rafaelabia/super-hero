/* 4 colunas, imagem e nome  */

function carregarHerois() {

    const requisicaoHttp = new XMLHttpRequest()
    requisicaoHttp.open("GET","https://akabab.github.io/superhero-api/api/all.json", false)
    requisicaoHttp.send()

    const resposta = JSON.parse(requisicaoHttp.responseText)

    const listaHerois = resposta

    for(let index = 0; index < listaHerois.length; index ++) {
        const heroi = listaHerois[index]
        adicionarCardHerois(heroi)
    }

}

function adicionarCardHerois(heroi) {
    const divCardHerois = document.createElement("div")
    divCardHerois.classList.add("card")

    const imagemElemento = document.createElement("img")
    imagemElemento.setAttribute("src", heroi.images.sm)

    const textoElemento = document.createElement("h2")
    textoElemento.innerHTML = heroi.name
    
    const divElemento = document.getElementById("conteudo-herois")

    divCardHerois.appendChild(imagemElemento)
    divCardHerois.appendChild(textoElemento)

    divElemento.appendChild(divCardHerois)    
}

