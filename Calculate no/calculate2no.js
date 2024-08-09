function addNumbers() {
    // Get values from inputs
    var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);
    
    // Validate inputs
    if (isNaN(num1) || isNaN(num2)) {
        document.getElementById('result').textContent = 'Please enter valid numbers';
        return;
    }
    
    // Calculate sum
    var sum = num1 + num2;
    
    // Display result
    document.getElementById('result').textContent = 'Result: ' + sum;
}
