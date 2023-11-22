function vexSix() {
    let vex6_sg = JSON.parse(localStorage.getItem('vex6_sg'));

    let newValue = prompt('Enter your new amount of Coins:');

    vex6_sg.stats.tm = Number(newValue);

    localStorage.setItem('vex6_sg', JSON.stringify(vex6_sg));

    alert("Now refresh UnleashedGames and your vex 6 coins will be set!")
}

function cookieClicker() {
    alert("Click somewhere on the screen and then press the 'h' key to open the hack menu!")
}