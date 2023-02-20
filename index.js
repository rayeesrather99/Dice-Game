// first random number 
let randomNumber1 = Math.floor(Math.random()*6)+1;
document.querySelector(".img1").setAttribute("src", "images/dice"+randomNumber1+".png");

// second random number 
let randomNumber2 = Math.floor(Math.random()*6)+1;
document.querySelector(".img2").setAttribute("src", "images/dice"+randomNumber2+".png");

//if else 
let title = document.querySelector("h1");
if (randomNumber1>randomNumber2){
    title.innerHTML = "🚩 Player 1 wins!"
} else if (randomNumber2>randomNumber1){
    title.innerHTML = "🚩 Player 2 Wins!"
}else {
    title.innerHTML= "Draw";
}
setInterval(x,1300);