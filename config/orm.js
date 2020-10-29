var connection = require("../config/connection.js");

// Object Relational Mapper (ORM)

// The ?? signs are for swapping out table or column names
// The ? signs are for swapping out other values
// These help avoid SQL injection
// https://en.wikipedia.org/wiki/SQL_injection



var orm = {
    selectAll: function(tableInput, cb) {
       connection.query("SELECT * from ??", [tableInput], function(err,result) {
           if (err) {
               throw err;
           }
        cb(result);
    });
  } ,


    insertOne: function(table, cols, vals, cb) {
        console.log("colums are", cols , "values are", vals)
        connection.query("INSERT INTO ?? (??) VALUES (?)" ,[table, cols, vals], function(err, result){
            if (err){
                throw err;
            }
            cb(result);
        });
    },

    updateOne: function(table, objColVals, condition, cb) {
        connection.query("UPDATE ?? SET ? WHERE id = ?", [table, objColVals, condition], function(err, result){
            if(err){
                throw err
            }
            cb(result);
        });
    },

    delete: function(table, condition, cb) {
        connection.query("DELETE FROM ?? WHERE id= ?", [table, condition],function(err, result){
           if (err){
               throw err
           } 
           cb(result)
        });
    }

};

module.exports= orm;



