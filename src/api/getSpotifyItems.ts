import { SpotifyItemsResponse } from "./SpotifyTypes"
import axios from "axios";

export const getSpotifyItems = (
	searchQuery: String,
	token: String
): Promise<SpotifyItemsResponse> => {
	return axios(
		"https://api.spotify.com/v1/search?q=" +
			searchQuery +
			"&type=track,artist,album",
		{
			headers: {
				"Content-Type": "application/json",
				Authorization: "Bearer " + token,
			},
		}
	)
		.then((response) => response.data)
		.catch((error) => {
			console.log("getSpotifyItems: Something went wrong", error);
		});
};