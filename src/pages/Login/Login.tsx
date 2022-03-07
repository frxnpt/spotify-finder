import React, { useContext } from "react";
import { signInWithSpotify } from "../../api/signInWithSpotify";
import { AuthContext } from "../../context/Login/AuthContext";

const Login = () => {
	const { authToken, setAuthToken, isAuthenticated, setIsAuthenticated } =
		useContext(AuthContext);
	const signIn = async () => {
		await signInWithSpotify().then((data) => {
			console.log(data.access_token);
			setAuthToken(data.access_token);
      setIsAuthenticated(true);
		});
	};

	return (
		<div>
			<button onClick={signIn}>Sign in with spotify</button>
		</div>
	);
};

export default Login;
