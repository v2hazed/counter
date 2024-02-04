let counterValue = 0;

function updateCounter() {
    document.getElementById('counter').innerText = counterValue;
}

function increment() {
    // update counter
    counterValue++;
    updateCounter();
}

function decrement() {
    if (counterValue > 0) {
        // Increment
        counterValue--;
        updateCounter();
    }
}