import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { Icon } from "./Icon";
import { Utils } from "../services/Utils";
import { storageService } from "../services/storageService";
import { addFav, removeFav } from '../store/actions/favActions';
import { getWeatherInfo } from '../store/actions/weatherActions';

export const MainComp = () => {
	const dispatch = useDispatch();
	const [searchValue, setSearchValue] = useState("");

	const key = useSelector(state => state.weatherReducer.key);
	const city = useSelector(state => state.weatherReducer.LocalizedName);
	const icon = useSelector(state => state.weatherReducer.WeatherIcon);
	const temp = useSelector(state => state.weatherReducer.Temp);
	const weatherText = useSelector(state => state.weatherReducer.WeatherText);
	const foreCast = useSelector(state => state.weatherReducer.foreCast);

	const favState = useSelector(state => state.favReducer.favs);
	const [isFav, setIsFav] = useState(favState.includes(key.toString()));

	const onSubmit = (e) => {
		e.preventDefault();
		dispatch(getWeatherInfo(searchValue));

		let arr = [];
		if (storageService.loadFromStorage('favs')) {
			arr = storageService.loadFromStorage('favs');
		}
		console.log('key', key);
		setIsFav(arr.includes(key.toString()))

	};


	useEffect(() => {
	}, [])

	let date = new Date("");

	const onAddToFav = () => {
		let arr = [];

		storageService.loadFromStorage('favs') ?
			arr = storageService.loadFromStorage('favs') :
			storageService.saveToStorage("favs", []);

		if (!arr.includes(key)) {
			arr.push(key);
			storageService.saveToStorage("favs", arr);
			dispatch(addFav(key));

			setIsFav(true);
		}
	}

	const onRemoveFav = () => {
		let arr = [];

		storageService.loadFromStorage('favs') ?
			arr = storageService.loadFromStorage('favs') :
			storageService.saveToStorage("favs", []);

		if (arr.includes(key)) {
			arr = arr.filter(el => key != el);
			storageService.saveToStorage("favs", arr);
			dispatch(removeFav(key));

			setIsFav(false);
		}
	}

	return (
		<div>

			<div className="searchFormContainer ra">
				<form onSubmit={onSubmit}>
					<input
						className="input"
						type="search"
						placeholder="Search"
						aria-label="Search"
						onChange={(e) => setSearchValue(e.target.value)}
					/>
					<button className="btn3" type="submit">
						Search
        </button>
				</form>
			</div>




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

					{favState.includes(key.toString()) ?
						<div>
							<i className="fas fa-heart"></i>
							<button className="btn2" onClick={onRemoveFav}>Remove from Favorites</button>
						</div>

						:
						<div>
							<i className="far fa-heart"></i>
							<button className="btn2" onClick={onAddToFav}>Add to Favorites</button>
						</div>
					}

				</div>
			</div>

			<div className="ra h-200">
				<h1>{weatherText}</h1>
			</div>

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