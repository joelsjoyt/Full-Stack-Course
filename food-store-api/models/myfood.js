//Schema for MyFood
var mongoose =  require('mongoose');
var Schema = mongoose.Schema;
var ObjID = mongoose.Schema.Types.ObjectId;

var myFood =  new Schema({
    title: {type: String, default: "My Food"},
    foods: [{type: ObjID, ref:'Food'}]
})

module.exports = mongoose.model('MyFood', myFood);