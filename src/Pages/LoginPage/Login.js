import React, { useState } from "react";
import { useHistory } from "react-router";
import { login } from "../../utils/auth";
import { LoginContainer, LoginShadow, Input, Label, Button } from "./LoginStyle";

const Login = ({ setAuth }) => {
	const history = useHistory();
	const [form, setForm] = useState({ username: "", password: "" });

	const handleInputChange = (event) => {
		setForm({ ...form, [event.target.name]: event.target.value });
	};
	const handleFormSubmit = (event) => {
		event.preventDefault();
		if (login(form["username"], form.password)) {
			setAuth(true);
			history.push("/");
		} else alert("Access Denied");
	};

	return (
		<LoginContainer>
			<LoginShadow>
				<div>
					<h1 style={{ textAlign: "center",fontSize:"45px" }}>Log In</h1>
					<form onSubmit={handleFormSubmit}>
						<div style={{ marginBottom: "10px" }}>
							<Label htmlFor="username">Username</Label>
							<Input
								id="username"
								name="username"
								type="text"
								placeholder="Username"
								value={form.username}
								onChange={handleInputChange}
							/>
						</div>
						<div style={{ marginBottom: "10px" }}>
							<Label htmlFor="password">Password</Label>
							<Input
								id="password"
								name="password"
								type="password"
								placeholder="Password"
								value={form.password}
								onChange={handleInputChange}
							/>
						</div>
						<div>
							<Button type="submit">Login</Button>
						</div>
					</form>
					<Button
						style={{ marginLeft: "50%" }}
						onClick={() => {
							history.push("/register");
						}}
					>
						Sign Up
					</Button>
				</div>
			</LoginShadow>
		</LoginContainer>
	);
};

export default Login;
