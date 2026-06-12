let firstcard = Math.floor(Math.random() * 10) + 2;
let secondcard = Math.floor(Math.random() * 10) + 2;
let cards = [firstcard, secondcard]
let sum = firstcard + secondcard
let hasBlackJack = false
let isAlive = true
let message = ""
let messageEl = document.getElementById("message-element")
// let king =10
// let ace = 11
if(sum < 21){
    message = ("Do u want to draw a new card?")
}
else if (sum ==21){
    message = ("congrats you got blackjack")
    hasBlackJack = true
}
else if (sum > 21){
    message = ("you are out of the game")
    isAlive = false
}
let cad = document.querySelector("#crd")
let sm = document.querySelector("#s")
function str(){
    if (!isAlive || hasBlackJack) return;
    messageEl.textContent = message
    cad.textContent += "Card1 = " + cards[0] + ", Card2 = " + cards[1]
    sm.textContent += sum
}
function ne() {
    if (!isAlive || hasBlackJack) return;

    let randomNu = Math.floor(Math.random() * 10) + 2;

    sum += randomNu;
    cad.textContent += ", Card3 = " + randomNu;
    sm.textContent = sum;

    if (sum < 21) {
        message = "Do you want to draw a new card?";
    } else if (sum === 21) {
        message = "Congrats! You got Blackjack!";
        hasBlackJack = true;
    } else {
        message = "You are out of the game";
        isAlive = false;
    }
    
    messageEl.textContent = "The new selected card is " + randomNu + ". " + message;
}

