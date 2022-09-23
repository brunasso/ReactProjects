let deck = [];
const tipos = ['C','D','H','S']
const especiales = ['A','J','Q','K']

const crearDeck = ()=>{
    for (let i = 2; i <= 10; i++) {
        for (let t = 0; t < tipos.length; t++) {
            deck.push(`${i}${tipos[t]}`)
            
        }
    }
    for (let i = 2; i <= 5; i++) {
        for (let t = 0; t < especiales.length; t++) {
            deck.push(`${i}${especiales[t]}`)
            
        }
    }
}
crearDeck()


const getRandomCards = (deckCards) => Math.floor(Math.random() * deckCards.length)

const shuffleArray = (arrayToShuffle) =>{
    let newArray=[]
    let done = []
    
    for (let i = 0; i < arrayToShuffle.length; i++) {
        let condicion = true;
        let randomCard;
        while(condicion){
            randomCard = getRandomCards(arrayToShuffle)
            if(done.indexOf(randomCard) === -1){
                done.push(randomCard)
                condicion = false;
            }
        }
        newArray.push(arrayToShuffle[randomCard])
    }
    return newArray
}

deck = shuffleArray(deck) 
console.log(deck)

const getCard = (deck) => {

    if(deck.length === 0){
        throw 'No hay más cartas'
    }

    let giveRandomCard = deck.pop()
    return giveRandomCard;
}

getCard(deck)
console.log(deck)