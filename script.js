const btn = document.getElementById("getWeather");
const result = document.getElementById("result");

btn.addEventListener("click", async() => {
    const city = document.getElementById("city").value.trim();
    if (!city) {
        result.innerHTML = "Please enter a city name.";
        return;
    }

    const apiKey = "cd47a859eea74758b1684113251107"; // Replace with your actual key from weatherapi.com
    const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`;

    try {
        result.innerHTML = "Fetching weather data...";
        const response = await fetch(url);
        if (!response.ok) throw new Error("City not found");

        const data = await response.json();
        const { location, current } = data;

        result.innerHTML = `
    <h2><strong>Temperature:</strong> ${current.temp_c}°C</h2>
      <h3>${location.name}, ${location.country}</h3>
      
      <h3><strong>Condition:</strong> ${current.condition.text}</h3>
      
    `;
    } catch (err) {
        result.innerHTML = `Error: ${err.message}`;
    }
});