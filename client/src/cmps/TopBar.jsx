import React from 'react'
import { NavLink } from "react-router-dom";


export const TopBar = () => {
	return (
		<div className="rb">

			<div className="logo ra">LOGO</div>
			<div className="menu ra">

				<NavLink to="/">Home</NavLink>
				<NavLink to="/Fav">Favorites</NavLink>


			</div>


		</div>
	)
}
