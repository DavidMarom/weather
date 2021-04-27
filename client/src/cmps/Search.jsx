import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getWeatherInfo } from '../store/actions/weatherActions';

export const Search = () => {
	const dispatch = useDispatch();

	const [searchValue, setSearchValue] = useState("");

	const onSubmit = (e) => {
		e.preventDefault();
		console.log(searchValue);
		dispatch(getWeatherInfo(searchValue));
	};

	return (
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
	);
};