import { println } from './utils.js';

export async function commandWeather(city) {
    if (!city) {
        println("Usage: weather [city]");
        return;
    }

    try {
        // Conversion city name to coordinates
        const { latitude, longitude } = await getCoordinates(city);

        if (!latitude || !longitude) {
            throw new Error("Could not retrieve coordinates.");
        }

        // Fetching weather data
        const url = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m&timezone=Europe%2FBerlin`;

        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        // Parsing JSON response
        const data = await response.json();

        // Displaying temperature
        if (data.current.temperature_2m) {

            const currentTemperature = data.current.temperature_2m;
            println(`The current temperature in ${city} is ${currentTemperature}°C.`);
            return currentTemperature;

        } else {
            throw new Error("Weather data is not available.");
        }

    } catch (error) {

        if (error.message === "Cannot destructure property 'latitude' of '(intermediate value)' as it is null.") {
            println(`Could not retrieve coordinates.`);
        } else {
            println(`Error fetching temperature data: ${error.message}`);
        }
        return null;
    }
}


async function getCoordinates(cityName) {
    const url = `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(cityName)}&count=1&language=en&format=json`;

    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();

        if (data.results && data.results.length > 0) {
            const result = data.results[0];
            const latitude = result.latitude;
            const longitude = result.longitude;
            return { latitude, longitude };
        } else {
            throw new Error("No results found for the given city.");
        }
    } catch (error) {
        console.error(`Error fetching coordinates: ${error.message}`);
        return null;
    }
}
