export enum Weather {
	SUNNY = "Sunny", RAINY = "Rainy", CLOUDY = "Cloudy", HAIL = "Hail", SNOW = "Snow"
}

export const weatherForecast: {[k: string]:Weather} = {
    "January" : Weather.SNOW,
    "February" : Weather.SNOW,
    "March" : Weather.RAINY,
    "April" : Weather.RAINY,
    "May" : Weather.CLOUDY,
    "June" : Weather.SUNNY,
    "July" : Weather.SUNNY,
    "August" : Weather.CLOUDY,
    "September" : Weather.CLOUDY,
    "October" : Weather.CLOUDY,
    "November" : Weather.HAIL,
    "December" : Weather.SNOW
};

export interface WeatherPredictorService {
	getWeather(date: Date): Weather;
	updateWeather(date: Date, weather: Weather): void;
}


export class DefaultWeatherPredictorService implements WeatherPredictorService {
    #weatherMonth  (date: Date) {
        const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        return months[date.getMonth()];
    };
    public getWeather(date: Date): Weather {
        const monthName = this.#weatherMonth(date);
        return weatherForecast[monthName];
    }
    public updateWeather(date: Date, weather: Weather): void {
        const monthName = this.#weatherMonth(date);
        weatherForecast[monthName] = weather;
    }
};


