import React from 'react'
import { useSelector, useDispatch } from "react-redux";


export const CityCard = ({cityKey}) => {
	const dispatch = useDispatch();

	// const city = useSelector(state => state.weatherReducer.LocalizedName);
	// const icon = useSelector(state => state.weatherReducer.WeatherIcon);
	// const temp = useSelector(state => state.weatherReducer.Temp);

	return (
		<div>
				{/* <p>{cityKey}</p>


				<div className="left rl w-300">
					<Icon iconNumber={icon} />
					<div className="cbl3">
						<p>{city}</p>
						<p>{temp}</p>
					</div>
				</div> */}

		</div>
	)
}
