const decreaser = document.getElementById("decreaser");
const reseter = document.getElementById("reseter");
const increaser = document.getElementById("increaser");
const counter = document.getElementById("counter");

let count = 0;

decreaser.onclick = function(){
    count--;
    counter.textContent = count;
}

increaser.onclick=function(){
    count++;
    counter.textContent = count;
}

reseter.onclick=function(){
    count=0;
    counter.textContent=count;
}