const generateCard=()=> {
    const suits = ['♠', '♥', '♦', '♣'];
    const values = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
    
    let randomSuit = suits[Math.floor(Math.random() * suits.length)];
    let randomValue = values[Math.floor(Math.random() * values.length)];
    
    document.getElementById("top-suit").textContent = randomSuit;
    document.getElementById("bottom-suit").textContent = randomSuit;
    document.getElementById("card-value").textContent = randomValue;
}