// Replace 'YOUR_API_KEY' with your actual OpenWeatherMap API key
const apiKey = 'YOUR_API_KEY';

function getWeather() {
    const city = document.getElementById('city').value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => response.json())
        .then(data => displayWeather(data))
        .catch(error => {
            document.getElementById('weather-result').innerHTML = "City not found!";
            console.error("Error:", error);
        });
}

function displayWeather(data) {
    if (data.cod === "404") {
        document.getElementById('weather-result').innerHTML = "City not found!";
        return;
    }

    const { main, weather, name } = data;
    const weatherHTML = `
        <h2>${name}</h2>
        <p>${weather[0].description}</p>
        <p>Temperature: ${main.temp}°C</p>
        <p>Humidity: ${main.humidity}%</p>
    `;
    document.getElementById('weather-result').innerHTML = weatherHTML;
}
