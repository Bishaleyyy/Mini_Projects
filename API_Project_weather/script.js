document.getElementById('search-button').addEventListener('click', function() {
    const city = document.getElementById('city-input').value;
    const apiKey = '79cdcd7171d34496f18e96ee0cd313d7';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            if (data.cod === 200) {
                document.getElementById('weather-result').innerHTML = `
                    <h2>${data.name}</h2>
                    <p>${data.weather[0].description}</p>
                    <p>Temperature: ${data.main.temp}°C</p>
                    <p>Humidity: ${data.main.humidity}%</p>
                    <p>Wind Speed: ${data.wind.speed} m/s</p>
                `;
            } else {
                document.getElementById('weather-result').innerHTML = `<p>City not found. Please try again.</p>`;
            }
        })
        .catch(error => {
            document.getElementById('weather-result').innerHTML = `<p>An error occurred. Please try again later.</p>`;
        });
});
