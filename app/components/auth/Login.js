import React, { Component } from "react";
import axios from "axios";
import Auth from "./Auth"

class Login extends Component {
	constructor(props) {
		super(props);

		this.state = {
			username: "",
			password: "",
			response: null,
		};

		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleInputChange = this.handleInputChange.bind(this);
	}

	handleSubmit(event) {
		event.preventDefault();
		axios.post("/auth/login", {
			"username": this.state.username,
			"password": this.state.password
		}).then((response) => {
			console.log(JSON.stringify(response));
			Auth.authenticateUser(response.data.token);
		})
	}

	handleInputChange(event) {
		console.log(event.target);
		const value = event.target.value;
		const name = event.target.name;

		this.setState({
			[name]: value
		});
	}

	render() {
		return(
			<div>
				<form className="form-group col-md-4 col-md-offset-4" onSubmit={this.handleSubmit}>
					<div className="form-group">
						<label>
							Username:
								<input
									name="username"
									placeholder="Username"
									className="form-control input-lg"
									type="text"
									value={this.state.username}
									onChange={this.handleInputChange} />
						</label>
					</div>
					<div className="form-group">
						<label>
							Password:
								<input
									name="password"
									placeholder="Password"
									className="form-control input-lg"
									type="password"
									value={this.state.password}
									onChange={this.handleInputChange} />
						</label>
					</div>
					<input
						className="btn btn-lg btn-warning"
						type="submit"
						value="Login" />
				</form>
			</div>
		)
	}
}

export default Login;