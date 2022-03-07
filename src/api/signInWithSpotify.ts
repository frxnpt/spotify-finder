import axios from "axios";
import { SignInWithSpotifyResponse } from "./SpotifyTypes";
//TODO: use a service to recieve generic headers
export const signInWithSpotify = (): Promise<SignInWithSpotifyResponse> => {
	return axios("https://accounts.spotify.com/api/token", {
		headers: {
			"Content-Type": "application/x-www-form-urlencoded",
			Authorization:
				"Basic " +
				btoa(
					process.env.REACT_APP_CLIENT_ID +
						":" +
						process.env.REACT_APP_CLIENT_SECRET
				),
		},
		data: "grant_type=client_credentials",
		method: "POST",
	})
		.then((response) => response.data)
		.catch((error) => {
			console.log("signInWithSpotify: Something went wrong", error);
		});
};
