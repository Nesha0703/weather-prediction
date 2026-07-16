const apiKey = "94037b7f459bd600e17b5d934510528d";

async function getWeather() {

    const city = document.getElementById("city").value;
    const result = document.getElementById("weatherResult");

    const url =
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {

        const response = await fetch(url);
        const data = await response.json();

        console.log(data);

        if (data.cod != 200) {
            result.innerHTML = data.message;
            return;
        }

        result.innerHTML = `
            <h2>${data.name}</h2>
            <p>🌡 Temperature: ${data.main.temp} °C</p>
            <p>💧 Humidity: ${data.main.humidity}%</p>
            <p>☁ Weather: ${data.weather[0].description}</p>
        `;

    } catch (error) {
        console.error(error);
        result.innerHTML = "Error fetching weather data";
    }
}