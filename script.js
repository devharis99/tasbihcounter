let count = parseInt(localStorage.getItem('tasbihCount')) || 0;

function updateDisplay() {
  document.getElementById("count").innerText = count;
  localStorage.setItem('tasbihCount', count); 
}


function getStep() {
  return parseInt(document.getElementById("step").value);
}


function increment() {
  count += getStep();
  updateDisplay();
}


function decrement() {
  if (count - getStep() >= 0) {
    count -= getStep();
    updateDisplay();
  }
}


function reset() {
  count = 0;
  updateDisplay();
}


updateDisplay();
