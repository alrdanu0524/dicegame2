function rollDice() {
    var dice1 = document.getElementById("dice1");
    var dice2 = document.getElementById("dice2");
    var rollSound = document.getElementById("rollSound");

    // Play roll sound
    rollSound.play();

    // Clear previous values
    dice1.innerText = "";
    dice2.innerText = "";

    // Add rolling animation
    dice1.classList.add("rolling");
    dice2.classList.add("rolling");

    // Generate random values after a short delay
    setTimeout(function() {
        var value1 = Math.floor(Math.random() * 6) + 1;
        var value2 = Math.floor(Math.random() * 6) + 1;

        // Update dice values
        dice1.innerText = value1;
        dice2.innerText = value2;

        // Remove rolling animation
        dice1.classList.remove("rolling");
        dice2.classList.remove("rolling");
    }, 1000); // 1000ms (1 second) delay for the rolling animation
}
