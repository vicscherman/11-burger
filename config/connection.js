const mysql = require ('mysql');

var connection =mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "Amandaforever69",
    database: "burger_db"
});

connection.connect(function(err){
    if (err){
        console.error("error connectiong at: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});

module.exports = connection;