import React, { Component } from "react";
import axios from "axios";

class Register extends Component {
	constructor(props) {
		super(props);

		this.state = {
			username: "",
			password: ""
		};

		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleInputChange = this.handleInputChange.bind(this);
	}

	handleSubmit(event) {
		event.preventDefault();
		axios.post("/register", {
			"username": this.state.username,
			"password": this.state.password
		}).then((response) => {

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
						className="btn btn-lg btn-info"
						type="submit"
						value="Create Account" />
				</form>
			</div>
		)
	}
}

export default Register;