var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose =  require('mongoose');
var db = mongoose.connect('mongodb://localhost/food-store-api', {useNewUrlParser: true, useUnifiedTopology: true});

var Food = require('./models/food');
var myFood = require('./models/myfood');
const { response } = require('express');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//Food List
app.post('/food', function(req, res ){
    var food = new Food();
    food.name = req.body.name;
    food.price = req.body.price;
    food.save(function(err, savedFood){
        if(err){
            res.status(500).send({error: "Could not save food details"});
        }else{
            res.send(savedFood);
        }
    });
});

app.get('/food', function(req, res){
    Food.find({}, function(err, foods){
        if(err){
            res.status(500).send({error: "Cannot find the foods"})
        }else{
            res.send(foods);
        }
    })
})

//See my foodlist
app.get('/myfood', function(req, res){
    myFood.find({}).populate({path:"foods", model:"Food"}).exec(function(err, foodlist){
        if(err){
            res.status(500).send({error:"Cannot find foodlist"});
        }else{
            res.send(foodlist);
        }
    })
})

//My food List
app.post('/myfood', function(req, res){
    var myfood = myFood();
    myfood.title = req.body.title;
    myfood.save(function(err, new_myfood){
        if(err){
            res.status(200).send({error: "Could not create My Food list"})
        }else{
            res.send(new_myfood);
        }
    })
})

// Add food to my food list
app.put('/myfood/add', function(req, res){
    Food.findOne({_id: req.body.foodID}, function(err, food){
        if(err){
            res.status(500).send({error:" Could not find food item"});
        }else{
            myFood.update({_id:req.body.foodlistID}, {$addToSet:{foods: food._id}}, 
                function(err, foodlist){
                    if(err){
                        res.status(500).send({error: " Cannod add food to foodlist"});
                    }else{
                        res.send(foodlist);
                    }
                })
        }
    })
})


app.listen('1001', function(){
    console.log("Food Store API running on port 1001...");
})