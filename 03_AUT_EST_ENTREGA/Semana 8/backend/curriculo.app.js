// CÓDIGO DO SERVIDOR

// importa bibliotecas necessárias
const express = require('express'); 
const sqlite3 = require('sqlite3').verbose();

// cria servidor no endereço local e determina que a pasta frontend deve ser usada como source
const app = express();
const hostname = '127.0.0.1';
const port = 3001;
const bodyParser = require('body-parser');
const urlencodedParser = bodyParser.urlencoded({ extended: false });

app.use(express.static("../frontend/"));

app.use(express.json());

// caminho do banco de dados
const DBPATH = 'db.db'


/* DEFINIÇÃO DOS ENDPOINTS */

// Experiencias - checar registros cadastros na tabela experiencias
app.get('/networks', (req, res) => {
	res.statusCode = 200;
	res.setHeader('Access-Control-Allow-Origin', '*');

	var db = new sqlite3.Database(DBPATH); 
  var sql = 'SELECT * FROM network ORDER BY name COLLATE NOCASE'; // ordena por name
	db.all(sql, [],  (err, rows ) => {
		if (err) {
		    throw err;
		}
		res.json(rows);
	});
	db.close(); 
});

// ExperienciasINSERT - inserir novos registros na tabela experiencias
app.post('/networkinsert', urlencodedParser, (req, res) => {
	res.statusCode = 200;
	res.setHeader('Access-Control-Allow-Origin', '*');
	// insere valores de nome e tipo segundo a request enviada pelo cliente
	sql = "INSERT INTO experiencias (titulo, instituicao, termino) VALUES ('" + req.body.titulo + "', '" + req.body.instituicao + "', '" + req.body.termino + "' )";
	var db = new sqlite3.Database(DBPATH);
	db.run(sql, [],  err => {
		if (err) {
		    throw err;
		}
	});
	db.close();
	res.end();
});

// ExperienciasDELETE - deletar registros cadastrados na tabela experiencias
app.post('/exeperienciasdelete', urlencodedParser, (req, res) => {
	res.statusCode = 200;
	res.setHeader('Access-Control-Allow-Origin', '*');
	// deleta segundo o id
	sql = "DELETE FROM network WHERE id = " + req.body.id;
	var db = new sqlite3.Database(DBPATH);
	db.run(sql, [],  err => {
		if (err) {
		    throw err;
		}
		res.end();
	});
	db.close(); 
});

// ExperienciasUPDATE - atualizar registros cadastrados na tabela experiencias
app.post('/experienciasupdate', urlencodedParser, (req, res) => {
	res.statusCode = 200;
	res.setHeader('Access-Control-Allow-Origin', '*');
	// permite alterar o nome e o tipo dado certo id (chave primária)
	sql = "UPDATE network SET titulo = '" + req.body.titulo + "', instituicao = '" + req.body.instituicao + "' WHERE id = " + req.body.id;
	var db = new sqlite3.Database(DBPATH);
	db.run(sql, [],  err => {
		if (err) {
		    throw err;
		}
		res.end();
	});
	db.close();
});

// Experiencias - checar registros cadastrados na tabela experiencias
app.get('/networkmanagers', (req, res) => {
	res.statusCode = 200;
	res.setHeader('Access-Control-Allow-Origin', '*'); // Isso é importante para evitar o erro de CORS

	var db = new sqlite3.Database(DBPATH); // Abre o banco
  var sql = 'SELECT * FROM network_manager ORDER BY name COLLATE NOCASE';
	db.all(sql, [],  (err, rows ) => {
		if (err) {
		    throw err;
		}
		res.json(rows);
	});
	db.close(); // Fecha o banco
});
/* Inicia o servidor */
app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
  });
  