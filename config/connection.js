const mysql = require ('mysql');

var connection;

if(process.env.JAWSDB_URL){
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {

    connection = mysql.createConnection({
    port: 3306,
    host: "localhost",
    user: "root",
    password: "Amandaforever69",
    database: "burger_db"
  });

};

connection.connect(function(err){
    if (err){
        console.error("error connectiong at: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});

module.exports = connection;