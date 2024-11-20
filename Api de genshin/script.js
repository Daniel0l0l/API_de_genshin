const botao = document.getElementById('botao')

botao.addEventListener('click', main)

function main() {
    const id = document.getElementById('persoId').value
    const url = `https://gsi.fly.dev/characters/${id}`

    fetch(url)

    .then(response => {
        return response.json()
    })

    .then(data => {
        console.clear()
        console.log(data)

        const name = document.getElementById('name')
        name.innerText = data.result.name

        const visao = document.getElementById('visao')
        visao.innerText = data.result.vision

        const arma = document.getElementById('arma')
        arma.innerText = data.result.weapon

        const regiao = document.getElementById('regiao')
        regiao.innerText = data.result.region[0]

        const raridade = document.getElementById('raridade')
        raridade.innerText = data.result.rarity

        const wiki = document.getElementById('wiki')
        const link = document.getElementById('link')
        wiki.innerText = data.result.wiki_url
        link.href = data.result.wiki_url
        link.target = '_blank'
    })

    .catch(error => {
        console.error('algum erro aí', error)

        const name = document.getElementById('name')
        name.innerText = 'Personagem não encontado'

        const visao = document.getElementById('visao')
        visao.innerText = '...'

        const arma = document.getElementById('arma')
        arma.innerText = '...'

        const regiao = document.getElementById('regiao')
        regiao.innerText = '...'

        const raridade = document.getElementById('raridade')
        raridade.innerText = '...'

        const wiki = document.getElementById('wiki')
        const link = document.getElementById('link')
        wiki.innerText = data.result.wiki_url
        link.href = '...'
        link.target = '...'
    })
}