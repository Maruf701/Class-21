var numberOfwin = 0;
var numberOfLost = 0;

for(var i = 1; i <= 5; i++){

    var userNumber = parseInt(prompt("Enter a Number 1 of 5 "));
    var randomNumber = Math.floor(Math.random() * 5 + 1);

    if(userNumber===randomNumber){

        console.log("You are Win " + userNumber+ ":" + randomNumber);
        numberOfwin++;

    }else{

        console.log("You are Lost " + userNumber+ ":" + randomNumber);
        numberOfLost++;

    }
}

document.write("Total Win : " + numberOfwin + "<br>");
document.write("Total Lost : " + numberOfLost);