import React from 'react'
import { useSelector } from "react-redux";
// const data = require("../../data.json");
import { Icon } from "./Icon";

export const MainComp = () => {
	const key = useSelector(state => state.weatherReducer.key);
	const city = useSelector(state => state.weatherReducer.LocalizedName);
	const icon = useSelector(state => state.weatherReducer.WeatherIcon);
	const temp = useSelector(state => state.weatherReducer.Temp);
	const weatherText = useSelector(state => state.weatherReducer.WeatherText);

	return (
		<div className="">

			{/* TOP */}
			<div className="top rb">

				<div className="left rl w-300">
					<Icon iconNumber={icon} />
					<div className="cbl3">
						<p>{city}</p>
						<p>{temp}</p>
					</div>
				</div>
				<div className="right rr w-300">
					<p>heart-icon</p>
					<button>text</button>
				</div>
			</div>


			<div >
				{weatherText}

			</div>


			<div className="card-grid">

				<div className="card">CARD</div>
				<div className="card">CARD</div>
				<div className="card">CARD</div>
				<div className="card">CARD</div>
				<div className="card">CARD</div>
				


			</div>







		</div>
	)
}
