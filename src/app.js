// Vulnerable JS example – SQL injection + hardcoded secrets
const express = require('express');
const mysql = require('mysql');
const app = express();

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "123456", // Hardcoded password
    database: "testdb"
});

// SQL Injection
app.get('/user', function(req, res) {
    const query = "SELECT * FROM users WHERE id = " + req.query.id;
    connection.query(query, function(err, data) {
        res.send(data);
    });
});

app.listen(3000);
