const fetchCountry = async (url) => {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Unable to retrieve data");
    }
    const data = await response.json();
    const weatherResponse = await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${data[0].latlng[0]}&longitude=${data[0].latlng[1]}&current_weather=true`
    );
    if (!weatherResponse.ok) {
      throw new Error("Unable to retrieve weather details");
    }
    const weather = await weatherResponse.json();
    const country = data[0].name.official;
    const capital = data[0].capital.toString();
    const currentWeather =
      weather.current_weather.temperature +
      weather.current_weather_units.temperature;
    const weatherDiv = document.getElementById("countries");
    const heading = document.createElement("h2");
    heading.textContent = `${country}'s current weather`;
    const content = document.createElement("p");
    content.innerHTML = `Country: ${country} <br> Capital: ${capital}<br> Current Temperature: ${currentWeather}`;
    weatherDiv.appendChild(heading);
    weatherDiv.appendChild(content);
    return {
      Country: country,
      Capital: capital,
      "Current Temperature": currentWeather,
    };
  } catch (error) {
    alert(error);
  }
};

const country = fetchCountry("https://restcountries.com/v3.1/name/USA")
  .then((data) => data)
  .catch((e) => console.log(e));
console.log(country);
