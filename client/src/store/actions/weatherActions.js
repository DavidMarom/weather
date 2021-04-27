import { weatherService } from "../../services/wService";

export function getWeatherInfo(cityName) {
	return async dispatch => {
		try {
			const _key = await weatherService.getLocationKey(cityName);
			console.log('CALLING getCurrTempNIcon with***** ',_key[0] );
			const _currTemp = await weatherService.getCurrTempNIcon(_key[0]);
			const _forecast = await weatherService.getForcast(_key[0]);
			
			const _response = [_key[0], _key[1], _currTemp[0], _currTemp[1] , _currTemp[2], _forecast]
			console.log('dispatching to reducer:', _response);
			dispatch({ type: 'GET_WEATHER_INFO', _response });
		} catch (err) {
			console.log('cant get info', err);
		}
	};
}