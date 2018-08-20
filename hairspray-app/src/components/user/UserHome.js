import React, { Component } from "react";
import { Link } from "react-router-dom";

import { logout } from "../../actions";

export default class UserHome extends Component {
	render() {
		const { logout } = this.props;
		return (
			<div className="sidebar">
				<div>
					<Link to="/user/home">Home</Link>
				</div>
				<div>
					<Link to="/user/scheduling">Scheduling</Link>
				</div>

				<div>
					<Link to="/user/billing">Billing</Link>
				</div>

				<div>
					<Link to="/user/feedback">Feedback</Link>
				</div>

				<div>
					<Link to="/user/settings">Settings</Link>
				</div>
				<div>
					<Link to="/signin" onClick={logout}>logout</Link>
				</div>
			</div>
		);
	}
}

const mapDispatchtoprops = (dispatch) => ( { logout: () => dispatch(logout()) } );

