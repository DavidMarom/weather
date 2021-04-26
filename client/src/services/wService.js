// import axios from "axios";
const data = require("./data.json");

// JH8tCq9kLXUnNH017Y8aN61AcEYMHBPT

// http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=JH8tCq9kLXUnNH017Y8aN61AcEYMHBPT&q=tel aviv&language=en-us
function getLocationKey(cityName) {



	const data = [
		{
			"Version": 1,
			"Key": "215854",
			"Type": "City",
			"Rank": 31,
			"LocalizedName": "Tel Aviv",
			"Country": {
				"ID": "IL",
				"LocalizedName": "Israel"
			},
			"AdministrativeArea": {
				"ID": "TA",
				"LocalizedName": "Tel Aviv"
			}
		}
	]
	console.log([data[0].Key,data[0].LocalizedName]);

	return [data[0].Key,data[0].LocalizedName] ;
}

// http://dataservice.accuweather.com/currentconditions/v1/215854?apikey=JH8tCq9kLXUnNH017Y8aN61AcEYMHBPT&language=en-us&details=false
function getCurrTempNIcon(locKey) {


	const data = {
		"LocalObservationDateTime": "2021-04-26T16:35:00+03:00",
		"EpochTime": 1619444100,
		"WeatherText": "Mostly cloudy",
		"WeatherIcon": 6,
		"HasPrecipitation": false,
		"PrecipitationType": null,
		"IsDayTime": true,
		"Temperature": {
			"Metric": {
				"Value": 20.9,
				"Unit": "C",
				"UnitType": 17
			},
			"Imperial": {
				"Value": 70.0,
				"Unit": "F",
				"UnitType": 18
			}
		},
		"MobileLink": "http://m.accuweather.com/en/il/tel-aviv/215854/current-weather/215854?lang=en-us",
		"Link": "http://www.accuweather.com/en/il/tel-aviv/215854/current-weather/215854?lang=en-us"
	}

	return [data.WeatherIcon , data.Temperature.Metric.Value ]
		
	
}

// http://dataservice.accuweather.com/forecasts/v1/daily/5day/215854?apikey=JH8tCq9kLXUnNH017Y8aN61AcEYMHBPT&language=en-us&details=false&metric=true
function getWeatherCity(query) {
	return {
		"Headline": {
			"EffectiveDate": "2021-04-26T08:00:00+03:00",
			"EffectiveEpochDate": 1619413200,
			"Severity": 7,
			"Text": "Noticeably cooler Monday",
			"Category": "cooler",
			"EndDate": "2021-04-26T20:00:00+03:00",
			"EndEpochDate": 1619456400,
			"MobileLink": "http://m.accuweather.com/en/il/tel-aviv/215854/extended-weather-forecast/215854?unit=c&lang=en-us",
			"Link": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?unit=c&lang=en-us"
		},
		"DailyForecasts": [
			{
				"Date": "2021-04-26T07:00:00+03:00",
				"EpochDate": 1619409600,
				"Temperature": {
					"Minimum": {
						"Value": 16.3,
						"Unit": "C",
						"UnitType": 17
					},
					"Maximum": {
						"Value": 21.7,
						"Unit": "C",
						"UnitType": 17
					}
				},
				"Day": {
					"Icon": 4,
					"IconPhrase": "Intermittent clouds",
					"HasPrecipitation": false
				},
				"Night": {
					"Icon": 36,
					"IconPhrase": "Intermittent clouds",
					"HasPrecipitation": false
				},
				"Sources": [
					"AccuWeather"
				],
				"MobileLink": "http://m.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=1&unit=c&lang=en-us",
				"Link": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=1&unit=c&lang=en-us"
			},
			{
				"Date": "2021-04-27T07:00:00+03:00",
				"EpochDate": 1619496000,
				"Temperature": {
					"Minimum": {
						"Value": 15.4,
						"Unit": "C",
						"UnitType": 17
					},
					"Maximum": {
						"Value": 21.5,
						"Unit": "C",
						"UnitType": 17
					}
				},
				"Day": {
					"Icon": 2,
					"IconPhrase": "Mostly sunny",
					"HasPrecipitation": false
				},
				"Night": {
					"Icon": 33,
					"IconPhrase": "Clear",
					"HasPrecipitation": false
				},
				"Sources": [
					"AccuWeather"
				],
				"MobileLink": "http://m.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=2&unit=c&lang=en-us",
				"Link": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=2&unit=c&lang=en-us"
			},
			{
				"Date": "2021-04-28T07:00:00+03:00",
				"EpochDate": 1619582400,
				"Temperature": {
					"Minimum": {
						"Value": 16.5,
						"Unit": "C",
						"UnitType": 17
					},
					"Maximum": {
						"Value": 23.5,
						"Unit": "C",
						"UnitType": 17
					}
				},
				"Day": {
					"Icon": 1,
					"IconPhrase": "Sunny",
					"HasPrecipitation": false
				},
				"Night": {
					"Icon": 33,
					"IconPhrase": "Clear",
					"HasPrecipitation": false
				},
				"Sources": [
					"AccuWeather"
				],
				"MobileLink": "http://m.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=3&unit=c&lang=en-us",
				"Link": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=3&unit=c&lang=en-us"
			},
			{
				"Date": "2021-04-29T07:00:00+03:00",
				"EpochDate": 1619668800,
				"Temperature": {
					"Minimum": {
						"Value": 18.9,
						"Unit": "C",
						"UnitType": 17
					},
					"Maximum": {
						"Value": 25.9,
						"Unit": "C",
						"UnitType": 17
					}
				},
				"Day": {
					"Icon": 1,
					"IconPhrase": "Sunny",
					"HasPrecipitation": false
				},
				"Night": {
					"Icon": 33,
					"IconPhrase": "Clear",
					"HasPrecipitation": false
				},
				"Sources": [
					"AccuWeather"
				],
				"MobileLink": "http://m.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=4&unit=c&lang=en-us",
				"Link": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=4&unit=c&lang=en-us"
			},
			{
				"Date": "2021-04-30T07:00:00+03:00",
				"EpochDate": 1619755200,
				"Temperature": {
					"Minimum": {
						"Value": 18.0,
						"Unit": "C",
						"UnitType": 17
					},
					"Maximum": {
						"Value": 26.8,
						"Unit": "C",
						"UnitType": 17
					}
				},
				"Day": {
					"Icon": 1,
					"IconPhrase": "Sunny",
					"HasPrecipitation": false
				},
				"Night": {
					"Icon": 34,
					"IconPhrase": "Mostly clear",
					"HasPrecipitation": false
				},
				"Sources": [
					"AccuWeather"
				],
				"MobileLink": "http://m.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=5&unit=c&lang=en-us",
				"Link": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=5&unit=c&lang=en-us"
			}
		]
	}



}

export const weatherService = {
	getLocationKey,
	getCurrTempNIcon,
	getWeatherCity
}



