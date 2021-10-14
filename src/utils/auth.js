export const login = (username, password) => {
	const auth = JSON.parse(localStorage.getItem("auth")) ?? {};
	console.log(auth[username]?.password === password);
	return auth[username]?.password === password;
};

export const createUser = (username, password) => {
	const auth = JSON.parse(localStorage.getItem("auth")) ?? {};

	if (auth[username]) {
		console.log(auth[username]);
		alert(`User ${username} already exists.`);
	} else {
		console.log(auth[username]);
		auth[username] = { password: password };
        localStorage.setItem("auth", JSON.stringify(auth));
        return true;
	}
};
