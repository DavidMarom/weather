import React from 'react';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import { withRouter } from 'react-router';
import { Login } from '../src/pages/Login';
import { Game } from '../src/pages/Game';

export const _App = () => {
	return (
		<div className="App">
			<p>App</p>

			<div className="outter-container">
				<div className="inner-container">

					<Switch>
						<Route exact component={Login} path={'/'} />
						<Route exact component={Game} path={'/Game'} />
					</Switch>
				</div>
			</div>


		</div>
	);
}

export const App = connect(null, null)(withRouter(_App));