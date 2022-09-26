//Shuffle de arrays

let deck = [];
const tipos = ['C','D','H','S']

const crearDeck = ()=>{
    for (let i = 2; i <= 10; i++) {
        for (let t = 0; t < tipos.length; t++) {
            deck.push(`${i}${tipos[t]}`)
            
        }
    }
}
crearDeck()


const shuffleArray = (arrayToShuffle) =>{
    let newArray=[]
    let done = []
    
    for (let i = 0; i < arrayToShuffle.length; i++) {
        let condicion = true;
        let randomCard;
        while(condicion){
            randomCard = Math.floor(Math.random() * arrayToShuffle.length)
            if(done.indexOf(randomCard) === -1){
                done.push(randomCard)
                condicion = false;
            }
        }
        newArray.push(arrayToShuffle[randomCard])
    }
    return newArray
}


console.log('Before Shuffle: ', deck)

deck = shuffleArray(deck)

console.warn('After Shuffle')
console.log(deck)