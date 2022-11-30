var display = document.getElementById('display');

function getBtnvalue(a){
     display.value += a;
}
function calculate(){
    var a = eval(display.value);
    display.value = a;
}

function clearAll(){
    display.value = "";
}