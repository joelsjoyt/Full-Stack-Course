// variables
var name = "Oh Boy";
var age = 0;
var dist = 1.56

var message = "Hi my name is " + name + " "  + age +" old";

// print on browser console
console.log(message); 

var sum = 1 + 2;
var sub = 1 - 2 ;
var msg = "Sum of 1 +2 is " + sum + 
          " Difference between 1 & 2 is " + sub;
console.log(msg);

// Conditional statements
var myBalance = 3000;
var price =250.50;

if (price <= myBalance){
    myBalance -= price;
    console.log("Valid purchase");
    console.log("New Balance "+ myBalance);
}else{
    console.log("Invalid purchase");
}

v1 = 10;
v2 = "10";
if(v1 == v2){
    console.log("valid");
}
if(v1 === v2){
    console.log("valid");
}else{
    console.log("invalid because they are of the different types");
}

if(2 === 5 || "a" === "a" ){
    console.log("pass");
}

if(2 === 5 && "a" === "a" ){
    console.log("pass");
}else{
    console.log("fail");
}

if(2 === "2" && "a" == "a" ){
    console.log("pass");
}else{
    console.log("fail");
}

// Arrays
var landmarks = ["Himalayas", "Goa", "Red Fort"];
console.log(landmarks);

var mostVisited = [];
mostVisited.push(landmarks[0])
console.log(mostVisited);

var index = mostVisited.indexOf("Himalayas");
if(index > -1){
    mostVisited.splice(index,1);
}
console.log(mostVisited);

//Loops
var end = 10;
for(var i=0; i<end; i++){
    console.log(i);
}

for (var i=0 ; i<landmarks.length; i++){
    console.log(landmarks[i]);
}

//Functions
function area( len, width){
    return len * width;
}
var area1 = area(10,10);
console.log(area1);

var rectArea = [];
rectArea.push(area(10,10));
rectArea.push(area(5,5));

console.log(rectArea);

var Balance = 1000
var transaction = function(prodPrice){
    if(prodPrice <= Balance){
        Balance -= price;
        console.log("Payment succesful");
    }else{
        console.log("payment failed");
    }
}

transaction(100);

var cusProfile = function(fname, lname){
    console.log("First name " + fname + " Last name "+ lname);
}

var cusDetails = [];
cusDetails.push(transaction);
cusDetails.push(cusProfile);

console.log(cusDetails);

//Objects
var person0 = {
    fname: "John",
    lname: "Wick",
    age: 30,
    entry : function(){
        return "Hey I'm "+ this.fname + " " + this.lname;
    }
}

console.log(person0.entry());

var person1 = new Object();
person1.fname = "Maria";
person1.lname = "Carey";
person1.age   = 30;

console.log(person1.fname);
console.log(person1.lname);
    // alternative
console.log(person1['fname']);

var person2 = {};
person2.fname = "Mike";
person2.lname = "Dough";
person2.age = 29;

var person = [];
person.push(person0);
person.push(person1);
person.push(person2);

for ( var i= 0; i<person.length; i++){
    console.log(person[i]);
}

//Object constructor / user defined
var Persons = [];

function Person(fname, lname, age){
    this.fname = fname;
    this.lname = lname;
    this.age = age;
    this.entry = function(){
        return "Hey I'm "+ this.fname + " " + this.lname;
    }
}

Person1 = new Person("Jenny", "Manny", 10);
console.log(Person1);
console.log(Person1.entry());

//Save Object constructor to array
Persons.push(new Person("Max", "Turner", 15));
Persons.push(new Person("Johnny","Shake", 25));
Persons.push(new Person("Xander", "Jack", 23));

for (var i=0; i< Persons.length; i++){
    var x = Persons[i];
    console.log(x.entry());
}

// iterate through keys in object
// for in loop to iterate through something
persn = Persons[0];
for (var key in persn){
    console.log(persn[key]);
}

// //Bind
// this.food = "Apple";

// var mysnack = {
//     food:"Pizza",
//     getfood: function(){
//         return this.food;
//     }
// }

// console.log(mysnack.getfood());

// var storeFood = mysnack.getfood();
// console.log(storeFood);



