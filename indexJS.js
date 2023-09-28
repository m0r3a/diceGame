function randomNumber () {
    var randomNum = Math.floor(Math.random()*6) + 1;
    return randomNum;
}

function playerWin (n1, n2) {
    if ( n1 > n2) {
        document.querySelector("h1").innerHTML = "🚩PLayer 1 wins!";
    } else if( n2 > n1 ) {
        document.querySelector("h1").innerHTML = "PLayer 2 wins!🚩";
    } else {
        document.querySelector("h1").innerHTML = "Draw!";
    }

    document.getElementById("p1").setAttribute("src","./images/dice" + n1 + ".png");
    document.getElementById("p2").setAttribute("src","./images/dice" + n2 + ".png");
}

function clickPlay () {
    var p1Number = randomNumber();
    var p2Number = randomNumber();

    playerWin(p1Number,p2Number);
}

function clickChangeName () {
    var name1 = prompt("Enter player's 1 name:");
    document.getElementById("p1Name").innerHTML = name1;
    
    var name1 = prompt("Enter player's 2 name:");
    document.getElementById("p2Name").innerHTML = name1;
}

function clickReset () {
    document.querySelector("h1").innerHTML = "Welcome to the dice game!";
    document.getElementById("p1").setAttribute("src","./images/dice1.png");
    document.getElementById("p2").setAttribute("src","./images/dice1.png");
    document.getElementById("p1Name").innerHTML = "Player 1";
    document.getElementById("p2Name").innerHTML = "Player 2";
}


document.getElementById("play").onclick = clickPlay;
document.getElementById("changeNames").onclick = clickChangeName;
document.getElementById("reset").onclick = clickReset;
