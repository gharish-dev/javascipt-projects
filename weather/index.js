// Static weather data
const weatherData = {
    "New York": { temperature: 22, description: "Clear sky" },
    "Los Angeles": { temperature: 25, description: "Sunny" },
    "Chicago": { temperature: 18, description: "Partly cloudy" },
    "Houston": { temperature: 30, description: "Humid" },
    "Phoenix": { temperature: 35, description: "Hot and dry" },
    "Nellore": { temperature: 30, description: "very hot" },
    "Govindampalli":{ temperature: 50, description: " hot"}
};

document.getElementById('getWeatherBtn').addEventListener('click', getWeather);

function getWeather() {
    const city = document.getElementById('cityInput').value;
    const data = weatherData[city];

    if (data) {
        displayWeather(city, data);
    } else {
        document.getElementById('weatherResult').innerHTML = "City not found";
    }
}

function displayWeather(city, data) {
    const weatherResult = document.getElementById('weatherResult');
    weatherResult.innerHTML = `
        <h2>${city}</h2>
        <p>Temperature: ${data.temperature} °C</p>
        <p>Description: ${data.description}</p>
    `;
}
