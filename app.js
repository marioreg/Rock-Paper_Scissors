var rps = ["Rock", "Paper", "Scissors"];
var userChoice = "";
var result="";

document.getElementById("rock").addEventListener("click", function(){
 userChoice = "Rock"   
 console.log("You chose: " + userChoice);
 document.getElementById("user").innerHTML = userChoice;
 randomCPU();
 game();
 
 });

document.getElementById("paper").addEventListener("click", function(){
    userChoice = "Paper"  
    console.log("You chose: " + userChoice);
    document.getElementById("user").innerHTML = userChoice;
    randomCPU();
    game();
   });

document.getElementById("scissors").addEventListener("click", function(){
    userChoice = "Scissors"   
    console.log("You chose: " + userChoice);  
    document.getElementById("user").innerHTML = userChoice;
    randomCPU(); 
    game();


   });
   
function randomCPU(){

    cpuChoice = rps[Math.floor(Math.random() * 3)];
    console.log("The Computer chose: "+cpuChoice);
    document.getElementById("cpu").innerHTML = cpuChoice;
};

function game(){
    if (userChoice ==="Rock" && cpuChoice==="Rock"){
        result = "It´s a tie!" 
        console.log(result);
        addResult();
             
    } else 

    if (userChoice==="Rock"  && cpuChoice==="Paper"){
        result = "You lose!" 
        console.log(result); 
        addResult();
    } else

    if (userChoice ==="Rock"  && cpuChoice==="Scissors"){
        result = "You win!"
        console.log(result);
        addResult();
    } else

    if (userChoice ==="Paper"  && cpuChoice==="Paper"){
        result = "It´s a tie!" 
        console.log(result);  
        addResult();
    } else

    if (userChoice ==="Paper"  && cpuChoice==="Scissors"){
        result = "You lose!" 
        console.log(result); 
        addResult();
               
    } else

    if (userChoice ==="Paper"  && cpuChoice==="Rock"){
        result = "You win!"
        console.log(result);  
        addResult();               
    } else

    if (userChoice ==="Scissors"  && cpuChoice==="Scissors"){
        result = "It´s a tie!" 
        console.log(result); 
        addResult();
             
    } else

    if (userChoice ==="Scissors"  && cpuChoice==="Rock"){
        result = "You lose!" 
        console.log(result);  
        addResult();
             
    } else

    if (userChoice ==="Scissors"  && cpuChoice==="Paper"){
        result = "You win!"
        console.log(result); 
        addResult();
       
    }
}

function addResult(){

    document.getElementById("result").innerHTML = result;
}


  


