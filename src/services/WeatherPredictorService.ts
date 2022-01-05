export enum Weather {
	SUNNY, RAINY, CLOUDY, HAIL, SNOW
}

export interface WeatherPredictorService {
	getWeather(date: Date): Weather;
	updateWeather(date: Date, weather: Weather): void;
}
