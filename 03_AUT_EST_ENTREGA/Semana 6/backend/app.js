const express = require('express');
const hostname = '127.0.0.1';
const port = 3031;
const sqlite3 = require('sqlite3').verbose();
const app = express();
const DBPATH = 'bancodedados.db'
const bodyParser = require('body-parser');
const urlencodedParser = bodyParser.urlencoded({ extended: false })
app.use(express.static("./frontend"));
app.use(express.json());
// caminho do banco de dados


app.get('/Experiencias', (req, res) => {
    res.statusCode = 200;
    res.setHeader('Access-Control-Allow-Origin', '*');

    var db = new sqlite3.Database(DBPATH);
    var sql = 'SELECT * FROM xp ORDER BY Titulo'; // ordena por name
    db.all(sql, [], (err, rows) => {
        if (err) {
            throw err;
        }
        res.json(rows);
    });
    db.close();
});

app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});