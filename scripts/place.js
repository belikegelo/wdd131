const temperature = 31;
const windSpeed = 5;

// Calculate wind chill in Celsius and km/h
function calculateWindChill(temperature, windSpeed) {
    return 13.12
        + (0.6215 * temperature)
        - (11.37 * windSpeed ** 0.16)
        + (0.3965 * temperature * windSpeed ** 0.16);
}

// Display temperature and wind speed
document.querySelector("#temperature").textContent = `${temperature} °C`;
document.querySelector("#wind-speed").textContent = `${windSpeed} km/h`;

// Check if wind chill calculation is possible
if (temperature <= 10 && windSpeed > 4.8) {
    const windChill = calculateWindChill(temperature, windSpeed);

    document.querySelector("#wind-chill").textContent =
        `${windChill.toFixed(1)} °C`;
} else {
    document.querySelector("#wind-chill").textContent = "N/A";
}
