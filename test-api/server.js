var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

var foods = [
    {
        "id":1,
        "name":"Apple"
    },
    {
        "id":2,
        "name":"Corn"
    },
    {
        "id":3,
        "name":"Orange"
    }
]

// CRUD - CREATE READ UPDATE DELETE
//Get Request
app.get('/', function(req , res){
    res.send(foods);
})

//Post request or add request
app.post('/food', function(req, res){
    var food = req.body;
    if(!food || food.name == ""){
        res.status(500).send({error: "Food must have a name"})
    }else{
        foods.push(food)
        res.send(foods);
    }
})

//PUT reuest or update request
app.put('/food/:foodID', function(req, res){
    var newName = req.body.name;
    if(!newName || newName === ""){
        res.status(500).send({error: "Food must have a name"});
    }else{
        var found = false;
        for ( var i = 0; i < foods.length; i++ ){
            if(parseFloat(foods[i].id)  === parseFloat(req.params.foodID)){
                foods[i].name = newName;
                found = true;
                break;
            }
        }
        if(!found){
            res.status(500).send({error:"Object not found"});
        }else{
            res.send(foods);
        }
        
    }
})

//Delete Request
app.delete('/food/:foodID', function(req, res){
        var found = false;
        for ( var i = 0; i < foods.length; i++ ){
            if(parseFloat(foods[i].id)  === parseFloat(req.params.foodID)){
                foods.splice(i,1);
                // res.send("Deleted id: " + req.params.foodID );
                found = true;
                break;
            }
        }
        if(!found){
            res.status(500).send({error:"Object not found"});
        }else{
            res.send(foods);
        }
})



//Listening for connection to port
app.listen(1001, function(){
    console.log("Test-api running on port 1001");
})