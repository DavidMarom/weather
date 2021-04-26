import React, { useState } from "react";

export const Search = () => {
	const [searchValue, setSearchValue] = useState("");

	const onSubmit = (e) => {
		e.preventDefault();
		console.log(searchValue);
	};


	return (
		<div className="searchFormContainer">
			<form className="d-flex" onSubmit={onSubmit}>
				<input
					className=""
					type="search"
					placeholder="Search"
					aria-label="Search"
					onChange={(e) => setSearchValue(e.target.value)}
				/>
				<button className="" type="submit">
					Search
        </button>
			</form>
		</div>
	);
};