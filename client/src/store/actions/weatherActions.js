import { weatherService } from "../../services/wService";

export const getWeatherInfo= (cityName) =>  async (dispatch) => {
		try {
			const _key = await weatherService.getLocationKey(cityName);
			const _currTemp = await weatherService.getCurrTempNIcon(_key[0]);
			const _forecast = await weatherService.getForcast(_key[0]);
			const _response = [_key[0], _key[1], _currTemp[0], _currTemp[1] , _currTemp[2], _forecast]
			dispatch({ type: 'GET_WEATHER_INFO', _response });
		} catch (err) {
			console.log('cant get info', err);
		}
	};

	export const getFavWeather = (key) =>  async (dispatch) => {
		try {
			const _currTemp = await weatherService.getCurrTempNIcon(key);
			console.log(_currTemp);
			const _response = [ _currTemp[0], _currTemp[1] , _currTemp[2]]
			dispatch({ type: 'GET_WEATHER_INFO', _response });
		} catch (err) {
			console.log('cant get info', err);
		}
	};
