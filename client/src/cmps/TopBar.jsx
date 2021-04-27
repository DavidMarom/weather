import React from 'react'
import { NavLink } from "react-router-dom";

export const TopBar = () => {
	return (
		<div className="rb top-bar">
			<div className="logo ral">Herolo Weather App</div>
			<div className="menu ra">
				<NavLink to="/">Home</NavLink>
				<NavLink to="/Fav">Favorites</NavLink>
			</div>
		</div>
	)
}
