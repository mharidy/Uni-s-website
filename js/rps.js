var computerChoice;
var userChoice;
var userScore = 0;
var computerScore = 0;
var go = false;	
document.addEventListener('DOMContentLoaded', function(){
    var start = document.getElementById('start');
    start.addEventListener('click',function(){promptMe();},false);
    
    var schere = document.getElementById('Schere');
    schere.addEventListener('click', function(){setUser(this.id);}, false);
    
    var stein = document.getElementById('Stein');
    stein.addEventListener('click', function(){setUser(this.id);}, false);
    
    var papier = document.getElementById('Papier');
    papier.addEventListener('click', function(){setUser(this.id);}, false);
    
    var retry = document.getElementById('retry');
    retry.addEventListener('click', function(){promptMe();}, false);
    
    var re = document.getElementById('reset');
    re.addEventListener('click', function(){reset();}, false);
    
    console.log('init go: ' + sessionStorage.getItem('play'));
    if(sessionStorage.getItem('play') == 'true') go = true;
});


function promptMe() {
    console.log('inside prompt: ' + sessionStorage.getItem('play'));
    console.log('go: '+go);
    if(go == false){
        // fill out form to play
        window.open('gameForm.html', '_self');
    }
    else{
    
    computerChoice = setComputer();

    document.getElementById('start').style.display = 'none';
    document.getElementById('retry').style.display = 'none';
    document.getElementById('Schere').style.display = 'block';       
    document.getElementById('Stein').style.display = 'block';
    document.getElementById('Papier').style.display = 'block';
	document.getElementById("reset").style.display = "none";
    
    document.getElementById('win').style.display = 'none';
    document.getElementById('loss').style.display = 'none';
    document.getElementById('tie').style.display = 'none';
    
    document.getElementById('text').style.display = 'block';
    document.getElementById("text").innerHTML = "Wähle deine Waffe!";
    console.log("Computer: " + computerChoice);
    }
}

function retry(){
    document.getElementById('retry').style.display = 'block';
    document.getElementById('Schere').style.display = 'none';
    document.getElementById('Stein').style.display = 'none';
    document.getElementById('Papier').style.display = 'none';
	document.getElementById('reset').style.display = 'block';
    console.log("> Retry");
}

function reset(){
  	document.getElementById('retry').style.display = "block";
    document.getElementById('Schere').style.display = 'none';
    document.getElementById('Stein').style.display = 'none';
    document.getElementById('Papier').style.display = 'none';
	document.getElementById('reset').style.display = 'block';
	userScore=0;
	computerScore=0;
	document.getElementById("uS").innerHTML=userScore.toString();
	document.getElementById("cS").innerHTML=computerScore.toString();
	document.getElementById("text").innerHTML="Neues Spiel!";
    console.log("> Reset");
}

function setUser(id) {
    switch(id){
            case "Schere": userChoice = "Schere"; break;
            case "Stein": userChoice = "Stein"; break;
            case "Papier": userChoice = "Papier"; break;
            }
        console.log("User: " + userChoice);
        compare(userChoice, computerChoice);
}

function setComputer() {
    var computerChoice = Math.random();
    if (computerChoice < 0.34) {
        computerChoice = "Stein";
    } else if(computerChoice <= 0.67) {
        computerChoice = "Papier";
    } else {
        computerChoice = "Schere";
    }
    return computerChoice;
}

function compare(choice1, choice2) {
    if (choice1 === choice2){
        console.log("> Unentschieden! Noch einmal.");
        document.getElementById("text").innerHTML = "Unentschieden! Noch einmal.";
        document.getElementById('tie').style.display = 'block';
		//reset();
        retry();
        
    }else compareElseIf(choice1, choice2);


}
function compareElseIf(choiceOne, choiceTwo){
	if (choiceOne === "Stein" && choiceTwo === "Papier"){
		winU();
	}
	else if( choiceOne === "Papier" && choiceTwo === "Schere"){
		winU();
        }
		else if(choiceOne === "Schere" && choiceTwo === "Stein"){
		winU();
		}
	else{
		loseU();
	}
}

function winU()
{
	 console.log("> Du hast verloren!");
            document.getElementById("text").innerHTML = "Verloren! Versuchs noch einmal.";
            document.getElementById('loss').style.display = 'block';
            
            computerScore++;
            document.getElementById("cS").innerHTML = computerScore.toString();
			        retry();
	
}
function loseU(){
	 console.log("> Du hast gewonnen!");
            document.getElementById("text").innerHTML = "Gewonnen! Spiel weiter.";
            document.getElementById('win').style.display = 'block';
            userScore++;
            document.getElementById("uS").innerHTML = userScore.toString();
	        retry();

            }
		//reset();
	
