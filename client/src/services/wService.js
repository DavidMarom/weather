import axios from "axios";
// import "./config.env";

// JH8tCq9kLXUnNH017Y8aN61AcEYMHBPT

// const dotenv = require("dotenv");

// Setting up config file
// dotenv.config({ path: "./config.env" });


async function ajax(endpoint, method, data) {
	try {
		const res = await axios({
			url: endpoint,
			method: method,
			data: data
		})
		return res.data;
	} catch (err) {
		console.log(`Had Issues ${method}ing to the backend, endpoint: ${endpoint}, with data: ${data}`);
		console.dir(err);

		throw err;
	}
}

// http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=JH8tCq9kLXUnNH017Y8aN61AcEYMHBPT&q=tel aviv&language=en-us
async function getLocationKey(cityName) {
	// console.log(process.env.apiKey)
	const res = await ajax(`http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=JH8tCq9kLXUnNH017Y8aN61AcEYMHBPT&q=${cityName}&language=en-us`, 'get', null)
	return [res[0].Key, res[0].LocalizedName];
}

// http://dataservice.accuweather.com/currentconditions/v1/215854?apikey=JH8tCq9kLXUnNH017Y8aN61AcEYMHBPT&language=en-us&details=false
async function getCurrTempNIcon(locKey) {
	const res = await ajax(`http://dataservice.accuweather.com/currentconditions/v1/${locKey}?apikey=JH8tCq9kLXUnNH017Y8aN61AcEYMHBPT&language=en-us&details=false`, 'get', null)
	return [res[0].WeatherIcon, res[0].Temperature.Metric.Value, res[0].WeatherText]
}

// http://dataservice.accuweather.com/forecasts/v1/daily/5day/215854?apikey=JH8tCq9kLXUnNH017Y8aN61AcEYMHBPT&language=en-us&details=false&metric=true
async function getForcast(locKey) {
	const res = await ajax(`http://dataservice.accuweather.com/forecasts/v1/daily/5day/${locKey}?apikey=JH8tCq9kLXUnNH017Y8aN61AcEYMHBPT&language=en-us&details=false&metric=true`, 'get', null)
	return res.DailyForecasts;
}

export const weatherService = {
	getLocationKey,
	getCurrTempNIcon,
	getForcast
}



