import debounce from "lodash.debounce";
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { getSpotifyItems } from "../../api/getSpotifyItems";
import { InputSearch } from "../../components/Actionables/InputSearch";
import BigContainerBox from "../../components/Containers/BigContainerBox";
import { ItemContainer } from "../../components/Containers/ItemContainer";
import ItemContainerGroup from "../../components/Containers/ItemContainerGroup";
import ListTracks from "../../components/Lists/ListTracks";
import { ItemContext } from "../../context/Items/ItemContext";
import { AuthContext } from "../../context/Login/AuthContext";

export const Tracks = () => {
	const authContext = useContext(AuthContext);
	const itemContext = useContext(ItemContext);
	const navigate = useNavigate();

	const clearResults = () => {
		console.log("borrando");
		itemContext.setAlbums([]);
		itemContext.setArtists([]);
		itemContext.setTracks([]);
		navigate("/overview");
	};

	const searchOnSpotifyAPI = (searchQuery: string) => {
		getSpotifyItems(searchQuery, authContext.authToken)
			.then((data) => {
				console.log("Fetched data", data);
				itemContext.setAlbums(data.albums.items);
				itemContext.setArtists(data.artists.items);
				itemContext.setTracks(data.tracks.items);
				//itemContext.setSpotifyItems(data as SpotifyItemsResponse)
			})
			.catch((err) => {
				alert('Result not found for "' + searchQuery + '" ');
			});
	};

	const updateSearch = debounce(searchOnSpotifyAPI, 0);
	return (
		<>
			<InputSearch onSearch={updateSearch} onClear={clearResults}></InputSearch>
			<BigContainerBox>
				<ItemContainer
					title="Tracks"
					linkText="Go Back"
					linkRef="/overview"
					small={false}
				>
					<ListTracks tracks={itemContext.tracks} small={false} />
				</ItemContainer>
			</BigContainerBox>
		</>
	);
};
export default Tracks;
