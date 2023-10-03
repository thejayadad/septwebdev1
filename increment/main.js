let count = 0;

function incrementCounter() {
    count++;
    updateCounterDisplay();
}

function decrementCounter() {
    count--;
    updateCounterDisplay();
}

function updateCounterDisplay() {
    const counterElement = document.getElementById("counter");
    counterElement.textContent = count;
}