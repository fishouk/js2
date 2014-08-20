function add(){
	var a = document.getElementById('game');
	var b = document.createElement('li');
    var d = prompt("Введите слово!");
	var c = document.createTextNode(d);
	b.appendChild(c);
	a.appendChild(b);}