var checkForm;
var formDone;
var surname;
var firstname;
var email;
var birthdate;
var submit;
window.onload=function(){
	console.log("formDone1   :  "+ formDone);
	console.log("checkForm1    :  "+ checkForm);

surname = document.getElementById('surname');
firstname = document.getElementById('firstname');
email = document.getElementById('email');
//var textarea = document.getElementsByTagName('textarea')[0];
birthdate = document.getElementById('birthdate');
submit = document.getElementsByTagName('button')[0];
/*var form = document.getElementsByTagName('form')[0];*/
if(surname){
surname.addEventListener('blur',function(){valName(surname);},false);
	}
	if(firstname){
firstname.addEventListener('blur',function(){valName(firstname);},false);
	}
	if(email){
		email.addEventListener('blur',function(){valMail(email);},false);
	}

//textarea.addEventListener('blur',function(){valText(textarea);},false);
	
submit.addEventListener('click', valForm, false);
/*form.addEventHandler('submit', function(e){e.stopPropagation;})*/
    
/*birthdate.addEventListener('blur',function(){testInput(birthdate);},false);
onsubmit="return valForm()" */
    
var regexName = /^([ \u00c0-\u01ffa-zA-Z\.' \-])+$/;
var regexEmail = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
     

function valName(input){
    if(input.value===''){
                if(input === firstname){
                    document.getElementsByClassName('error')[0].style.display = 'block';
                }
                if(input === surname){
                    document.getElementsByClassName('error')[1].style.display = 'block';
                }
                return false;
            }
            if(!(input.value.match(regexName))) {
                if(input === firstname){
                    document.getElementsByClassName('error')[0].innerHTML = 'Keine Sonderzeichen erlaubt!';
                    document.getElementsByClassName('error')[0].style.display = 'block';
                }
                if(input === surname){
                    document.getElementsByClassName('error')[1].innerHTML = 'Keine Sonderzeichen erlaubt!';
                    document.getElementsByClassName('error')[1].style.display = 'block';
                }
                return false;
            }
            else{
                if(input === firstname){
                    document.getElementsByClassName('error')[0].style.display = 'none';
                }
                if(input === surname){
                    document.getElementsByClassName('error')[1].style.display = 'none';
                }
                return true;
            }
    }
    
function valMail(input){
    if(input.value===''){
            document.getElementsByClassName('error')[3].style.display = 'block';
			return false;
		}
        if(!(input.value.match(regexEmail))){
            document.getElementsByClassName('error')[3].style.display = 'block';
            return false;
        } /*else{
            document.getElementsByClassName('error')[3].style.display = 'none';
            return true;
        }*/
}
    /*
function valText(input){
    if(input == textarea){
        if(input.value == ''){
            document.getElementsByClassName('error')[4].style.display = 'block';
            return false;
        }
        else {
            document.getElementsByClassName('error')[4].style.display = 'none';
            return true;
        }
    }
}
	
/*	function startgame(){
		window.onload= function(){
			pop();
		} 
		
		
	}
	
	function pop(){
		alert("hey");
		
		
		
	}*/
function valForm(){
   // console.log(valName(surname));
   // console.log(valName(firstname));
   // console.log(valMail(email));
   // console.log(valText(textarea));
    if(true){
        console.log('alles richtig');
		checkForm=true;
		
        return true
    } else {
       console.log('etwas fehlt');
		checkForm=false;
        return false;
    }
}
}

	


	
	



function backToGame(){
		if(checkForm== true){
			formDone=true;
				console.log("formDone back true  :  "+ formDone);
	console.log("checkForm    :  "+ checkForm);

		   		window.open("game.html");
			return true;
 }
		else{
				console.log("formDone   :  "+ formDone);
	console.log("checkForm  back false   :  "+ checkForm);

		console.log("noooooooooo");
			return false;
	}
}

