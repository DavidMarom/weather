import React, { useEffect } from 'react'
import { useDispatch } from "react-redux";
// import { useHistory } from "react-router-dom";
import { MainComp } from '../cmps/MainComp';
import { getWeatherInfo } from '../store/actions/weatherActions';
import { Search } from "../cmps/Search";

export const Home = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getWeatherInfo('tel aviv'));

	}, [])

	return (
		<div>
			<Search />
			<MainComp />
		</div>
	)
}