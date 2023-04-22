import "./style.css";
import fetchCurrentWeather from "./src/utils/fetchCurrentWeather";
import appendWeather from "./src/appendWeather";

fetchCurrentWeather("Baguio").then((data) => appendWeather(data));
