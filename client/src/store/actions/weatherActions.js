import { weatherService } from "../../services/wService";

export function getWeatherInfo(cityName) {
	return async dispatch => {
		try {
			const _key = await weatherService.getLocationKey(cityName);

			const _currTemp = await weatherService.getCurrTempNIcon(_key[0]);
			// const _forecast = await weatherService.getForcast(_key[0]);
			// const data = await Promise.all([      ,     )])
			// key, name, icon, temp
			const _response = [_key[0], _key[1], _currTemp[0], _currTemp[1] , _currTemp[2]]
			console.log('dispatching to reducer:', _response);
			dispatch({ type: 'GET_WEATHER_INFO', _response });
		} catch (err) {
			console.log('cant get info', err);
		}
	};
}


// export function addAnn(ann) {
//     return async dispatch => {
//         try {
//             const _ann = await announcementsService.addAnn(ann);
//             dispatch({ type: 'ADD_ANN', _ann })
//         } catch (err) {
//             console.log('SettingsActions: err in updateSettings', err);
//         }
//     }
// }

// const allAnn = await announcementsService.getAnnouncements();