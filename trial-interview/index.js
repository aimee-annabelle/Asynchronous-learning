/** fetch the country details
  * Handle errors if any
  * extract the longitude and latitude from the country details
  * fetch weather details
  * handle errors if any 
  * then return name, capital and current weather
  * https://restcountries.com/v3.1/name/{countryName} 
  * https://api.open-meteo.com/v1/forecast?latitude={lat}&longitude={lon}&current_weather=true
*/
const fetchCountryWeather = async () => {
  try {
    const countryResponse = await fetch(
      "https://restcountries.com/v3.1/name/Rwanda"
    );
    if (!countryResponse.ok) throw new Error("Unable to fetch country details");
    const countryData = await countryResponse.json();
    const latitude = countryData[0].latlng[0];
    const longitude = countryData[0].latlng[1];

    const weatherResponse = await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`
    );
    if (!weatherResponse.ok) throw new Error("Unable to fetch weather");
    const countryWeather = await weatherResponse.json();
    const countryName = countryData[0].name.common;
    const countryCapital = countryData[0].capital.toString();
    const temperature = countryWeather.current_weather.temperature;
    /**
     * return `
     *       Country: ${countryName},
     *       Capital: ${countryCapital},
     *       Current Temperature: ${temperature},
     *   `;
     */
    return {
      Country: countryName,
      Capital: countryCapital,
      "Current Temperature": temperature,
    };
  } catch (error) {
    console.log(error);
  }
};

fetchCountryWeather().then((data) => console.log(data));
