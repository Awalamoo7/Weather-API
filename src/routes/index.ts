//import standard libraries
import express from 'express';
import Joi from 'Joi';
import bodyParser from 'body-parser';
import { Weather } from '../services/WeatherPredictorService';
import { getWeather, updateWeather } from '../controllers/Weather.controller';


const app = express();
app.use(bodyParser.json()); 



app.get('/predict', (req, res) => {
    const date = new Date(Number(req.query.date));
    
    const response = getWeather(date);
    res.status(200).send(response);
});

app.post('/update', (req, res) => {
    const { error } = validateUpdate(req.body.date, req.body.weather); 
    if (error) return res.status(400).send(error.details[0].message);

    const date = new Date(Number(req.body.date));

    const response = updateWeather(date,req.body.weather);
    res.status(200).send(null);
});



function validateUpdate(date:Date, weather: Weather) {
    const schema = Joi.object({
        date: Joi.date().timestamp(),
      weather: Joi.string().valid(...Object.values(Weather)).required()
    })
    return schema.validate({date, weather});
  };

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`The application is listening on port ${port}!`);
})

