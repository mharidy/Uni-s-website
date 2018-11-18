document.addEventListener('DOMContentLoaded', function(){

var surname = document.getElementById('surname');
var firstname = document.getElementById('firstname');
var email = document.getElementById('email');
var textarea = document.getElementsByTagName('textarea')[0];
var birthdate = document.getElementById('birthdate');
//var submit = document.getElementsByTagName('button')[0];
var form = document.getElementsByTagName('form')[0];

surname.addEventListener('blur',function(){valName(surname);},false);
firstname.addEventListener('blur',function(){valName(firstname);},false);
email.addEventListener('blur',function(){valMail(email);},false);
textarea.addEventListener('blur',function(){valText(textarea);},false);
//submit.addEventListener('click', function(){valForm();}, false);
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
    if(input.value==='' || input.value==null){
            document.getElementsByClassName('error')[3].style.display = 'block';
			return false;
		}
        if(!(input.value.match(regexEmail))){
            document.getElementsByClassName('error')[3].style.display = 'block';
            return false;
        } else{
            document.getElementsByClassName('error')[3].style.display = 'none';
            return true;
        }
}
    
function valText(input){
    if(input == textarea){
        if(input.value == '' || input.value==null){
            document.getElementsByClassName('error')[4].style.display = 'block';
            return false;
        }
        else {
            document.getElementsByClassName('error')[4].style.display = 'none';
            return true;
        }
    }
}

function valForm(){
    console.log(valName(surname));
    console.log(valName(firstname));
    console.log(valMail(email));
    console.log(valText(textarea));
    if(valName(surname) && valName(firstname) && valMail(email) && valText(textarea)){
        console.log('alles richtig');
        return true
    } else {
        console.log('etwas fehlt');
        return false;
    }
}
});