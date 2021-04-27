import React from 'react'
import { useSelector } from "react-redux";
import { Icon } from "./Icon";
import { Utils } from "../services/Utils";

export const MainComp = () => {
	const city = useSelector(state => state.weatherReducer.LocalizedName);
	const icon = useSelector(state => state.weatherReducer.WeatherIcon);
	const temp = useSelector(state => state.weatherReducer.Temp);
	const weatherText = useSelector(state => state.weatherReducer.WeatherText);
	const foreCast = useSelector(state => state.weatherReducer.foreCast);

	let date = new Date("");
	return (
		<div>

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
					<i className="fas fa-heart"></i>
					<button>text</button>
				</div>
			</div>

			<div >{weatherText}</div>

			<div className="card-grid">

				{foreCast.map((day, idx) => {
					date = new Date(day.Date);
					return (
						<div key={idx} className="card ca">
							<p>{Utils.numToDay(date.getDay())}</p>
							<p>{day.Temperature.Maximum.Value} °C</p>
						</div>
					);
				})}
			</div>
		</div>
	)
}