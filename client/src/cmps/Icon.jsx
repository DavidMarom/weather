import React from 'react'

export const Icon = ({ iconNumber }) => {
	console.log(iconNumber);
	return (
		<div className="w-100">
			{iconNumber < 10 ?
				<img src={`https://apidev.accuweather.com/developers/Media/Default/WeatherIcons/0${iconNumber}-s.png`} alt="" />
			:
				<img src={`https://apidev.accuweather.com/developers/Media/Default/WeatherIcons/${iconNumber}-s.png`} alt="" />
			}
		</div>
	)
}