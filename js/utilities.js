function getInputFieldVlaueById(inputId){
    const inputField = document.getElementById(inputId);
    const inputFieldVlaueStinrg = inputField.value ;
    const inputFieldValue = parseFloat(inputFieldVlaueStinrg);
    inputField.value = '';
    return inputFieldValue;
}
function getTextElementValueById(elementId){
    const textElement = document.getElementById(elementId);
    const textElementValueStiring = textElement.innerText;
    const textElementValue = parseFloat(textElementValueStiring);
    return textElementValue;
}
function setTextElementValueById(elementId, newValue){
    const textElement = document.getElementById(elementId);
    textElement.innerText = newValue;
}