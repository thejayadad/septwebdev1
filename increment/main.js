
let count = 0
function incrementCounter(){
    count++;
    updateCounter()
}
function decrementCounter(){
    count --;
    updateCounter()
}



function updateCounter(){
    const counter = document.getElementById('counter')
    counter.textContent = count;
}