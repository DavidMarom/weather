import React , {useEffect} from 'react'
import { useSelector, useDispatch } from "react-redux";
import { storageService } from "../services/storageService";
import { CityCard } from "../cmps/CityCard";
// import { useSelector } from "react-redux";


export const Fav = () => {

	

useEffect(() => {
	
}, [])

	let arr = [];
	if (storageService.loadFromStorage('favs')) {
		arr = storageService.loadFromStorage('favs');
	}

	return (
		<div>

			<div className="card-grid">
				
			<CityCard cityKey={623}/>



			</div>

		</div>
	)
}
