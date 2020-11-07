//Here is my JavaScript file for my dice rolling application
// I tried implementing the onClickListener instead of making a seperate 
//function, but I was having issues. 


var totalScore = 0;
var runningScore =0;
var backToOne = false;

var win = 100;


function rollDice(){
    runningScore = 0;
    var dice = Math.floor(Math.random() * 6)+1;
    var dice1 = Math.floor(Math.random()*6) + 1;
    dice= Number(dice);
    dice1 = Number(dice1);



if(dice ===1){
    backToOne = true;
    totalScore=0;
    runningScore=0;
       

}


if(dice1 ===1){
    backToOne= true;
    totalScore = 0;
    runningScore = 0;
}
if(backToOne = true){
    document.getElementById("backToOne").value = "Back to 0 points!";
}
document.getElementById("backToOne").innerHTML = "";
runningScore = dice + dice1;
totalScore += runningScore;
    
document.getElementById("dice1").value= dice;
document.getElementById("dice2").value= dice1;
document.getElementById("runningScore").value = runningScore;
document.getElementById('totalScore').value = totalScore;
if (totalScore > 100){
    document.getElementById("winner").innerHTML = "WINNER";
}
document.getElementById("winner").innerHTML = "";

}


function scoreKeeper(){
    
    var dice = document.getElementById("dice1").value;
    var dice1 = document.getElementById("dice2").value;

    dice= Number(dice);
    dice1 = Number(dice1);
    
    //totalScore += runningScore;

    document.getElementById("totalScore").value = totalScore;
    



}
