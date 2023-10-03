
let count = 0;

function incrementCounter() {
    count++;
    const counterElement = document.getElementById("counter");
    counterElement.textContent = count;
}