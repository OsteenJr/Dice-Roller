function rollDice() {

    const userInput = document.getElementById('userInput').value;
    const diceResult = document.getElementById('diceResult');
    const diceImages = document.getElementById('diceImages');
    let values = []; //array to store the values of the dice rolled
    let images = []; //array to store the images of the dice rolled

    for(let i = 0; i < userInput; i++) {
        const value = Math.floor(Math.random() * 6) + 1;
        values.push(value); 
       images.push(`<img src = "img/${value}.png">`); //push the image name to the images array
    }
    diceResult.textContent = `You rolled: ${values.join(', ')}`; //display the values of the dice rolled
    diceImages.innerHTML = images.join(' '); //display the images of the dice rolled


}