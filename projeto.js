var express = require ('express');
var mustache = require ('mustache-express');
var app = express ();

app.engine ('html', mustache ());
app.set ('view engine', 'html');
app.set ('views', __dirname + 'views/');

//link para o menu
app.get ('/', function (req, res) {
	res.render ('views/menu.html');
});
//link para a pagina sobre
app.get("/contato", function(req, res){
	res.render(__dirname + "contato.html");
});
//link para a pagina ajuda
app.get("/ajuda", function(req, res){
	res.render(__dirname + "ajuda.html");
});
//link para o css
app.use('/css', express.static(__dirname + 'css/'));

//porta que o servidor vai rodar
var port = 3000;
app.listen (port, function () {
	console.log ('escutando na porta ${port}...');
})