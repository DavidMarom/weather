const initialState = {
	key: 215854,
	LocalizedName: "Tel Aviv",
	WeatherIcon: 0,
	Temp: null,
	WeatherText: null,
	foreCast : []
};

export function weatherReducer(state = initialState, action = {}) {
	switch (action.type) {
		case 'GET_WEATHER_INFO':
			return {
				key: action._response[0],
				LocalizedName: action._response[1],
				WeatherIcon: action._response[2],
				Temp: action._response[3],
				WeatherText:action._response[4],
				foreCast: action._response[5]
			};

		default:
			return state
	}
}