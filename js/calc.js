var input1 = document.getElementById('input1');
var input2 = document.getElementById('input2');
var result = document.getElementById('result');
var form = document.getElementById('form');

form.addEventListener('submit', function(event){
    if(!input1.value || !input2.value){
        alert("Please enter input values");
    }else{
        var x = parseFloat(input1.value);
        var y = parseFloat(input2.value);

        var res = ((x/y) * 100);
        result.innerText = "Result is " + res + "%";
        event.preventDefault();
    }
})

