document.addEventListener("DOMContentLoaded", function(){

var surname = document.getElementById('surname');
var firstname = document.getElementById('firstname');
var email = document.getElementById('email');
var form = document.getElementsByTagName('form')[0];

surname.addEventListener('blur',function(){valName(surname);},false);
firstname.addEventListener('blur',function(){valName(firstname);},false);
email.addEventListener('blur',function(){valMail(email);},false);
form.addEventListener('submit', function(e){valForm(); e.preventDefault;}, false);

var regexName = /^([ \u00c0-\u01ffa-zA-Z\.' \-]{3,})+$/;
var regexEmail = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
     

function valName(input){
    if(input.value==='' || input.value==null){
                if(input === firstname){
                    document.getElementsByClassName('error')[0].style.display = 'block';
                }
                if(input === surname){
                    document.getElementsByClassName('error')[1].style.display = 'block';
                }
                console.log('name falsch');
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
                console.log('name falsch');
                return false;
            }
            else{
                if(input === firstname){
                    document.getElementsByClassName('error')[0].style.display = 'none';
                }
                if(input === surname){
                    document.getElementsByClassName('error')[1].style.display = 'none';
                }
                console.log('name richtig');
                return true;
            }
    }
    
function valMail(input){
    if(input.value==='' || input.value==null){
            document.getElementsByClassName('error')[2].style.display = 'block';
            console.log('email falsch');
			return false;
		}
        if(!(input.value.match(regexEmail))){
            document.getElementsByClassName('error')[2].style.display = 'block';
            console.log('email falsch');
            return false;
        } else{
            document.getElementsByClassName('error')[2].style.display = 'none';
            console.log('email richtig');
            return true;
        }
}

function valForm(){
    if(valName(surname) && valName(firstname) && valMail(email)){
        console.log('alles richtig');
        sessionStorage.setItem('play', 'true');
        console.log(sessionStorage.getItem('play'));
        window.open('game.html');
        return true;
    } else {
        return false;
    }
}
});