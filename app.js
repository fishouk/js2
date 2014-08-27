function doClear(theText){
    if (document.game.g_w_input.value == document.game.g_w_input.defaultValue) { document.game.g_w_input.value = "" } }

function doDefault(theText){ 
    if (document.game.g_w_input.value == "" ) { document.game.g_w_input.value = document.game.g_w_input.defaultValue } }

function add(){
	var a = document.getElementById('game');
	var b = document.createElement('li');
    var d = document.getElementById('g_input').value;
	var c = document.createTextNode(d);
	b.appendChild(c);
	a.appendChild(b);
	
}

function doLast(theText){
	if (document.game.g_w_input.value !== "Ваше слово") {document.game.g_w_input.value="Ваше слово"} }