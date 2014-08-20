function doClear(theText){
    if (theText.value == theText.defaultValue) { theText.value = "" } }

function doDefault(theText){ 
    if (theText.value == "") { theText.value = theText.defaultValue } }

function add(){
	var a = document.getElementById('game');
	var b = document.createElement('li');
    var d = document.getElementById('g_input').value;
	var c = document.createTextNode(d);
	b.appendChild(c);
	a.appendChild(b);
}