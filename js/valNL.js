window.onload=function(){
    
var nlbutton = document.getElementById('nlbutton');
var nl = document.getElementsByTagName('input')[2];
    
nlbutton.addEventListener('click', function(){valMail(nl);}, false);

var regexEmail = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
     
function valMail(input){
        if(input.value===''){
                console.log('falsch');
                alert('Bitte geben Sie eine gültige E-Mail an.');
                return false;
        }
        if(!(input.value.match(regexEmail))){
                console.log('falsch');
                alert('Bitte geben Sie eine gültige E-Mail an.');
                return false;
            } else{
                console.log('richtig');
                return true;
            }
    }
}