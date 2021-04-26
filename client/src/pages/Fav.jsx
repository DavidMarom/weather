import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux";


export const Fav = () => {
	let activeUser = useSelector(state => state.userReducer.user);

	const [state, setstate] = useState('display');

	
useEffect(() => {
	
}, [state])

	return (
		<div>
			<h1>Favorites</h1>


			<p>The user is: {activeUser}</p>
			
		</div>
	)
}
