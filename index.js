const names = ["Guadalupe", "Ollie", "Aki"]
const cards = []
function writeCards(names, eventname){
    for (let i = 0; i < names.length; i++){
        cards.push(`Thank you, ${names[i]}, for the wonderful surprise gift!`)
    }
    return cards
}
writeCards(cards)

function countDown(){
    let callcount = 10
    while (callcount > -1) {
        console.log(callcount --)
    }
    return countDown
}