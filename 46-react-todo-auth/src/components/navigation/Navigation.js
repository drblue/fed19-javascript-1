import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navigation = props => {
	return (
		<nav id="navigation" className="navbar navbar-expand-md navbar-dark bg-dark">
			<div className="container">
				<Link to="/" className="navbar-brand">Awesome Todos</Link>

				<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>

				<div className="collapse navbar-collapse" id="navbarNav">
					<ul className="navbar-nav ml-auto">
						<li className="nav-item">
							<NavLink to="/" className="nav-link">All Todos</NavLink>
						</li>
						<li className="nav-item">
							<NavLink to="/login" className="nav-link">Login</NavLink>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	)
}

export default Navigation;
