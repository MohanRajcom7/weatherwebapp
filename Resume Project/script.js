/*const API = "bd4d341b974710545bbe17298083861f"
const APIURL  = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=Bangalore"
async function checkweather(){
    const response = await fetch(APIURL + '&appid=${apikey"');
    var data  = await response.json();
    console.log(data)

}
function printing{
    console.log("SALEM")
}*/
document.getElementById('getWeatherBtn').addEventListener('click', getWeather);

function getWeather() {
    const city = document.getElementById('cityInput').value;
    const apiKey = 'bd4d341b974710545bbe17298083861f'; // Replace with your API key
    const url = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${apiKey}`;

    // Example for a different API structure
    // const url = `https://api.example.com/weather?city=${city}&apikey=${apiKey}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.cod === '404' || data.cod === '400') {
                alert('City not found or bad request');
                return;
            }

            document.getElementById('cityName').textContent = data.name;
            document.getElementById('temperature').textContent = `Temperature: ${data.main.temp}°C`;
            document.getElementById('weatherDescription').textContent = `Weather: ${data.weather[0].description}`;
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
            alert('An error occurred while fetching weather data.');
        });
}
