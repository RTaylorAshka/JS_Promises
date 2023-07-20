
async function drawNewCard(){
    const res = await axios.get('https://deckofcardsapi.com/api/deck/new/draw/?count=1')
    const card = res.data.cards[0]
    console.log(`${card.value} of ${card.suit}`)
    return card
}

drawNewCard()

async function drawTwoCards(){
    const res1 = await axios.get('https://deckofcardsapi.com/api/deck/new/draw/?count=1')
    const card1 = res1.data.cards[0]
    const res2 = await axios.get(`https://deckofcardsapi.com/api/deck/${res1.data['deck_id']}/draw/?count=1`)
    const card2 = res2.data.cards[0]

    console.log(`${card1.value} of ${card1.suit}`)
    console.log(`${card2.value} of ${card2.suit}`)

}

drawTwoCards()



const htmlContent = document.querySelector('div')
const drawButton = document.querySelector('button')




const deck = {
    async init(){
        let res = await axios.get('https://deckofcardsapi.com/api/deck/new/shuffle')
        this.id = res.data['deck_id']
        drawButton.disabled = false
    },
    async draw(){
         try   {
            let res = await axios.get(`https://deckofcardsapi.com/api/deck/${this.id}/draw/?deck_count=1`)
            let card = document.createElement('img')
            card.src = res.data.cards[0]['image'] 
            htmlContent.appendChild(card)
            drawButton.disabled = false
        } catch {
            console.log('NO MORE CARDS!')
        }
    }
}

deck.init()
drawButton.addEventListener("click", () => {

    drawButton.disabled = true
    deck.draw()


})