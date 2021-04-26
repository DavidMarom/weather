import React from 'react'
import { useSelector } from "react-redux";
// const data = require("../../data.json");


export const MainComp = () => {
	const key = useSelector(state => state.weatherReducer.key);
	const city = useSelector(state => state.weatherReducer.LocalizedName);
	const icon = useSelector(state => state.weatherReducer.WeatherIcon);
	const temp = useSelector(state => state.weatherReducer.Temp);


	// const dispatch = useDispatch()


	console.log('test redux:', key, city, icon, temp);
	return (
		<div className="cb">

			<div className="top">

				<div className="left">

					<p>image</p>
					<p>name+temp</p>


				</div>
				<div className="right">

					<button>text</button>


				</div>


			</div>


			<div></div>
			<div></div>







		</div>
	)
}
