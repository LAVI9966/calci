let val;
val = document.getElementById('input');
function updatval(a){
    val.value += a;
}
function dect(){
    val.value = val.value.slice(0,-1);
}
function clearw(a){
    if(a === '`'){
        val.value = "";
    }
}
function calc (){
        val.value = eval(val.value);
}
//for hancling keyboard events

document.addEventListener('keydown' , function(event){
const key = event.key;
if(key === "Enter"){
event.preventDefault();
calc();
}
if(key === "Backspace"){
event.preventDefault();
dect();
}
if(key === "Escape"){
event.preventDefault();
clearw();
}
if(!isNaN(key) || key === '.' || key === '*' || key === '%' || key === '/' || key === '+' || key === '-'){
event.preventDefault();
updatval(key);
}
});

//for changing styles 
document.querySelector()