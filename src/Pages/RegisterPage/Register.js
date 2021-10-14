import React, { useState } from "react";
import { useHistory } from "react-router";
import { createUser } from "../../utils/auth";
import { Button, Input, Label, RegisterContainer, RegisterShadow } from "./RegisterStyle";

const Register = ({ setAuth }) => {
	const history = useHistory();
	const [form, setForm] = useState({
		username: "",
		password: "",
	});

	function handleInputChange(event) {
		setForm({ ...form, [event.target.name]: event.target.value });
	}

	function handleFormSubmit(event) {
		event.preventDefault();
		if (form.username === "" || form.password === "")
			alert("your missing someting!");
		else {
			if (createUser(form.username, form.password)) {
				setAuth(true);
				history.push("/");
			}
		}
	}
	return (
		<RegisterContainer>
			<RegisterShadow>
				<form onSubmit={handleFormSubmit}>
				<h1 style={{ textAlign: "center", fontSize: "45px" }}>Register</h1>
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
						<Button type="submit">Sign Up</Button>
					</div>
				</form>
			</RegisterShadow>
		</RegisterContainer>
	);
};

export default Register;
