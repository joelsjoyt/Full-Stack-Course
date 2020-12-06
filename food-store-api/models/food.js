//Schema for food table
var mongoose =  require('mongoose');
var Schema = mongoose.Schema;

var food = new Schema({
    name: String,
    price: Number,
    rating: {type:Number, default:0}
})

module.exports = mongoose.model('Food', food);