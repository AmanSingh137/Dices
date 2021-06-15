var randomnumber1 = (Math.floor(Math.random() * 6))+1;
var randomnumber2 = (Math.floor(Math.random() * 6))+1;
var imagelink = "D:\\dice game\\Dicee Challenge - Starting Files\\images\\dice";
var finalLink = imagelink + randomnumber1 + ".png";
var finalLink2 = imagelink + randomnumber2 + ".png";
document.getElementsByClassName("img1")[0].setAttribute("src", finalLink);
document.getElementsByClassName("img2")[0].setAttribute("src", finalLink2);


if(randomnumber2 > randomnumber1) {
    document.querySelector(".container h1").innerHTML = "Player 2 Wins 🎈";
}

else if(randomnumber1 > randomnumber2) {
    document.querySelector(".container h1").innerHTML = "🎈Player 1 Wins ";
}

else if(randomnumber2 == randomnumber1) {
    document.querySelector(".container h1").innerHTML = "🎈Draw🎈";
}