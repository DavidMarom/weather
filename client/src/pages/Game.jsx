import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { getRand } from '../services/game';
import { PlaySeq } from '../cmps/PlaySeq';

export const Game = () => {
	let activeUser = useSelector(state => state.userReducer.user);

	const [seq, setSeq] = useState([getRand(), getRand()]);
	const [state, setstate] = useState('display');

	// display
	// input
	// end


useEffect(() => {
	
}, [state])

	return (
		<div>
			<h1>Game</h1>


			<p>The user is: {activeUser}</p>
			{
				state === 'display' ?
				<PlaySeq seq={seq} />
				: null

			}
		</div>
	)
}
