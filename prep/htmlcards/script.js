const generateCard=()=>{
    const suits = ['♠', '♥', '♦', '♣'];
    const values = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];

    const top=document.getElementById("top-suit")
    const card=document.getElementById("card-value")
    const bot=document.getElementById("bottom-suit")

    let randomSuit=Math.floor(Math.random()*suits.length)
    let randomvalue=Math.floor(Math.random()*values.length)

    top.innerText=suits[randomSuit]
    bot.innerText=suits[randomSuit]
    card.innerText=values[randomvalue]

}
