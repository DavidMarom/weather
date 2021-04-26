import React from 'react';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import { withRouter } from 'react-router';
import { Login } from './pages/Login';
import { Fav } from './pages/Fav';
import { TopBar } from '../src/cmps/TopBar';

export const _App = () => {
	return (
		<div className="App">

			<div className="outter-container">
				<div className="inner-container">
					<TopBar />
					<Switch>
						<Route exact component={ Fav } path={'/Fav'} />
						<Route exact component={ Login } path={'/'} />
					</Switch>
				</div>
			</div>


		</div>
	);
}

export const App = connect(null, null)(withRouter(_App));