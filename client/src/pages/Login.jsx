import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { updateUser } from '../store/actions/userActions';
import { useHistory } from "react-router-dom";


export const Login = () => {
	const dispatch = useDispatch();
	let history = useHistory();

	let activeUser = useSelector(state => state.userReducer.user);
	const [formUser, setFormUser] = useState(activeUser);

	const doUpdate = async ev => {
		ev.preventDefault();
		dispatch(updateUser(formUser));
		activeUser = formUser;
		history.push("/Game");
	};

	let form = (
		<form onSubmit={doUpdate}>
			<input name="name" onChange={ev => { setFormUser(ev.target.value) }}></input>
			<div><button>Save</button></div>
		</form>
	)

	return (
		<div>
			<h1>login page</h1>
			<p>The user is: {activeUser}</p>

			{form}
		</div>
	)
}