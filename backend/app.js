const express = require('express');
const app = express()
const hostname = '127.0.0.1';
const port = 3000;
const sqlite3 = require('sqlite3').verbose();
const DBPATH = './data/recebe-dados.db';
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
var db = new sqlite3.Database(DBPATH);
app.use(express.static('./frontend'));

const path = require('path');
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "..", "frontend", "index.html"));
});


app.get('/get',(req, res) =>{
    console.log("passei no endpoint");
    res.setHeader('Acess-Control-Allow-Origin', '*');
    var sql = 'SELECT * FROM program'
    db.all(sql,[],(err,rows)=>{
        if (err){
            res.send(err)
        }
        res.send(rows)
    })

});

app.post('/mensagem', (req, res) => {
    console.log("passei aqui");
    res.statusCode = 200;
    res.setHeader('Access-Control-Allow-Origin', '*');
    var db = new sqlite3.Database(DBPATH); // Abre o banco
    sql = "INSERT INTO program (mensagem) VALUES (?)";
    console.log(sql);
    db.run(sql, [req.body.data],  err => {
        if (err) {
            throw err;
        }
    });
    res.write('<p>USUARIO INSERIDO COM SUCESSO!</p><a href="/">VOLTAR</a>');
    db.close(); // Fecha o banco
    res.end();
});
  
  
app.listen(port, hostname, () => {
console.log(`Servidor rodando em http://${hostname}:${port}/`);
});








