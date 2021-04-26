import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { updateUser } from '../store/actions/userActions';
import { useHistory } from "react-router-dom";


export const Login = () => {
	const dispatch = useDispatch();
	let history = useHistory();

	let activeUser = useSelector(state => state.userReducer.user);
	const [formUser, setFormUser] = useState(activeUser);



	return (
		<div>
			<h1>Home</h1>
			
		</div>
	)
}