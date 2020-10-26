//importing dependencies

const express = require("express");
//declaring our router for later
var router = express.Router();

var burger = require("../models/burger.js")




router.get("/", function(req, res){
    burger.selecAll(function(data){
        var hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

router.post("/api/burgers", function(req, res) {
    burgers.create(["name", "devoured"], [req.body.name, req.body.devoured], function(result){
        //send back the ID of the new burger name
        res.json({ id:result.insertId});
    });
});


router.put("/api/burgers/:id", function(req, res){
    var condition = "id = " + req.params.id;

    console.log("condition", condition);

    burger.updateOne(
        {
          devoured: req.body.devoured
        },
        condition,
        function(result) {
            if (result.changedRows ===0) {
                //if no rows were changed, id doesn't exist so 404 error
                return res.status(404).end();
            }
            res.status(200).end();
        }
    );
});

router.delete("/api/burger/:id" , function(req,res){
    var condition = "id = " +req.params.id;

    burger.delete(condition, function(result) {
        if (result.affectedRows== 0) {

            return res.status(404).end();
        }else{
        res.status(200).end();
        }
    });

});

module.exports = router