function setElementValueById(elementId, value) {
    document.getElementById(elementId).innerText = value;
  }

function totalCost(id, value) {
    const totalCost = parseInt(document.getElementById(id).innerText);    
    const sum = totalCost + parseInt(value);
    setElementValueById(id, sum);
  }
  
function getInputValueById(elementId) {
    const inputValue = document.getElementById(elementId).value;    
    return inputValue;
}