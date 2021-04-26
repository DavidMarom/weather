import React from 'react';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import { withRouter } from 'react-router';
import { Home } from './pages/Home';
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
						<Route exact component={ Home } path={'/'} />
					</Switch>
				</div>
			</div>


		</div>
	);
}

export const App = connect(null, null)(withRouter(_App));