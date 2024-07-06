function convertToCelsius() {
    // Get the input value (temperature in Celsius)
    let celsius = parseFloat(document.getElementById('celsius').value);
    
    // Convert Celsius to Fahrenheit
    let fahrenheit = (celsius * 9/5) + 32;
    
    // Display the result
    document.getElementById('resultFahrenheit').innerText = `${celsius}°C = ${fahrenheit.toFixed(2)}°F`;
  }
  
  function convertToFahrenheit() {
    // Get the input value (temperature in Fahrenheit)
    let fahrenheit = parseFloat(document.getElementById('fahrenheit').value);
    
    // Convert Fahrenheit to Celsius
    let celsius = (fahrenheit - 32) * 5/9;
    
    // Display the result
    document.getElementById('resultCelsius').innerText = `${fahrenheit}°F = ${celsius.toFixed(2)}°C`;
  }
  