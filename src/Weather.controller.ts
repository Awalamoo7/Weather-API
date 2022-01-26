import { DefaultWeatherPredictorService, Weather } from "./services/WeatherPredictorService";

export const getWeather = (date: Date) => { 
    const s = new DefaultWeatherPredictorService();
    return s.getWeather(date);
};

export const updateWeather = (date: Date, weather: Weather) => {
    const s = new DefaultWeatherPredictorService();

    return s.updateWeather(date, weather);
}