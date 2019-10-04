var express = require ('express');
var mustache = require ('mustache-express');
var app = express ();

app.engine ('html', mustache ());
app.set ('view engine', 'html');
app.set ('views', __dirname + '/views');

app.get ('/', function (req, res) {
	res.render ('menu.html');;
});

app.get ('/ajuda.html', function (req, res) {
	res.render ('ajuda.html');
});

app.get ('/contato.html', function (req, res) {
	res.render ('contato.html');
});

app.get ('/sobre.html', function (req, res) {
	res.render ('sobre.html');
});

app.get ('/inicio.html', function (req, res) {
	res.render ('inicio.html');
});

app.use('/css', express.static(__dirname + '/css'));

app.use('/imagens', express.static(__dirname + '/imagens'));

var port = 3000;
app.listen (port, function () {
	console.log (`Escutando na porta ${port}...`);
});