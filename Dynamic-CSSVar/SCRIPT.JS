
const root = document.documentElement;


function redUser(value) {root.style.setProperty(`--colorUser`, value);}
function redPass(value) {root.style.setProperty(`--colorPass`, value);}

function clearField(){
	root.style.setProperty(`--colorUser`, '#FFFFFF ');
	root.style.setProperty(`--colorPass`, '#FFFFFF ');
}
function clearAll(){
	
	clearField()
	document.getElementById("USER").value = ""
	document.getElementById("PASS").value = ""
	
}

function validate(){
clearField();
var user = document.getElementById("USER").value;
var pass= document.getElementById("PASS").value;

if(user==""|pass==""){alert("preencha TODOS os campos!")

	if(user==""){redUser('#FCFF7F '); }
	if(pass==""){redPass('#FCFF7F '); }
}
else{
	if(user!="testuser"){alert("ACESSO NEGADO! ID ERROR");redUser('#FF0000 ')}
	if(pass!="mypassword"){alert("ACESSO NEGADO! PASSWORD ERROR");redPass('#FF0000 ')}

}

if(user=="testuser"&pass=="mypassword"){document.write("<H1>PARABENS VC ACERTOU</H1>")};

}



/*testuser 
mypassword*/


