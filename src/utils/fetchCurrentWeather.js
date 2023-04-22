export default async function fetchCurrentWeather(city) {
  const API_KEY = "ff9928e77fa5ee825f9ece73e0bdc4b5";
  const CURRENT_WEATHER_API = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`;

  const response = await fetch(CURRENT_WEATHER_API);
  const weatherData = await response.json();
  return weatherData;
}
