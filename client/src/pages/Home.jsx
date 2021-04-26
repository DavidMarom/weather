import React, { useState } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import { Search } from "../cmps/Search";

export const Home = () => {
	// const dispatch = useDispatch();
	// let history = useHistory();

	let activeUser = useSelector(state => state.userReducer.user);
	// const [formUser, setFormUser] = useState(activeUser);



	return (
		<div>
			<h1>Home</h1>
			<Search />



		</div>
	)
}