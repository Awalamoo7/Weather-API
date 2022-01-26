import * as mocha from 'mocha';
import * as chai from 'chai';
import { Weather, weatherForecast } from '../src/services/WeatherPredictorService';
import {DefaultWeatherPredictorService, WeatherPredictorService} from '../src/services/WeatherPredictorService';

const expect = chai.expect;


describe ('getWeather', function(){
    it('it should return a string of type Weather',function(){
        const s = new DefaultWeatherPredictorService();
        let d = new Date(1/1/2021);
        expect(s.getWeather(d)).to.equal(weatherForecast["January"]);
    });
});

describe ('updateWeather', function(){
    it('it should return a new string of the updated type Weather',function(){
        const s = new DefaultWeatherPredictorService();
        let d = new Date(1/1/2021);
        s.updateWeather(d, Weather.HAIL)
        expect(s.getWeather(d)).to.equal(weatherForecast["January"]);
    });
});