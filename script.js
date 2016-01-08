var operatore = true;

// var che capisce se l'operazione è finita
var finito = false ;


var punto = false;


function n(op)

{

	var cookieValue = document.getElementById(op).getAttribute('value');    
    
	

	// se il numero è 0 o si è gia ottenuto il soluzione dell'operazione inizia da capo
if(document.getElementById("soluzione").innerHTML =="0" || document.getElementById("soluzione").innerHTML==null 
	|| finito == true)
{document.getElementById("soluzione").innerHTML=op;
finito = false}
else{document.getElementById("soluzione").innerHTML+=op;}
operatore = false
}