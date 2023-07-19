// const newDeck = axios.get('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
// let deckID = null

// newDeck.then((result) => {
//     return axios.get(`https://deckofcardsapi.com/api/deck/new/draw/?count=1`)
// }).then((result) => {
//     const card = result.data.cards[0]
//     console.log(`${card.value} of ${card.suit}`)
// })

const newCard = axios.get('https://deckofcardsapi.com/api/deck/new/draw/?count=1')
newCard.then((result) => {
    const card = result.data.cards[0]
    console.log(`${card.value} of ${card.suit}`)
})

const anotherNewCard = axios.get('https://deckofcardsapi.com/api/deck/new/draw/?count=1')
newCard.then((result) => {
    console.log(result)
    const card = result.data.cards[0]
    console.log(`${card.value} of ${card.suit}`)
    return axios.get(`https://deckofcardsapi.com/api/deck/${result.data['deck_id']}/draw/?deck_count=1`)
}).then((result) => {
    console.log(result)
    const card = result.data.cards[0]
    console.log(`${card.value} of ${card.suit}`)
    
})


const htmlContent = document.querySelector('div')
const drawButton = document.querySelector('button')
const newDeck = axios.get('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
let deckID = null

newDeck.then((result) => {
    deckID = result.data['deck_id']
    drawButton.disabled = false
})

drawButton.addEventListener("click", () => {

    drawButton.disabled = true
    const drawnCard = axios.get(`https://deckofcardsapi.com/api/deck/${deckID}/draw/?deck_count=1`)
    drawnCard.then((result) => {
        const card = document.createElement('img')
        card.src = result.data.cards[0]['image']
        console.log(result.data['remaining'])
        htmlContent.appendChild(card)
        drawButton.disabled = false
    }).catch(console.log('NO CARDS LEFT'))
    
})