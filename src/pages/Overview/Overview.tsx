import React, { useContext } from "react";
import { getSpotifyItems } from "../../api/getSpotifyItems";
import { InputSearch } from "../../components/Actionables/InputSearch";
import BigContainerBox from "../../components/Containers/BigContainerBox";
import { ItemContainer } from "../../components/Containers/ItemContainer";
import ItemContainerGroup from "../../components/Containers/ItemContainerGroup";
import debounce from "lodash.debounce";
import ListArtists from "../../components/Lists/ListArtists";
import { AuthContext } from "../../context/Login/AuthContext";
import { ItemContext } from "../../context/Items/ItemContext";

export const Overview = () => {
	const authContext = useContext(AuthContext);
	const itemContext = useContext(ItemContext);

	const clearResults = () => {
		console.log("borrando")
		itemContext.setAlbums([]);
		itemContext.setArtists([]);
		itemContext.setTracks([]);
	};
	
	const searchOnSpotifyAPI = (searchQuery: string) => {
		getSpotifyItems(searchQuery, authContext.authToken)
		.then((data) => {
			console.log("Fetched data", data)
			itemContext.setAlbums(data.albums.items);
			itemContext.setArtists(data.artists.items);
			itemContext.setTracks(data.tracks.items);
			//itemContext.setSpotifyItems(data as SpotifyItemsResponse)
		})
		.catch(err => {
			alert('Result not found for "' + searchQuery + '" ');
		});
	};

	
	const updateSearch = debounce(searchOnSpotifyAPI, 500);	
	
	console.log(JSON.stringify(authContext));
	console.log(JSON.stringify(itemContext.artists))

	return (
		<>
			<InputSearch onSearch={updateSearch} onClear={clearResults}></InputSearch>
			<BigContainerBox>
				<ItemContainerGroup>
					<ItemContainer title="Artists" small={true}>
						<ListArtists artists={itemContext.artists} limit={1} small={false} />
					</ItemContainer>
					<ItemContainer title="Albums" small={true}>
						<ListArtists artists={itemContext.artists} limit={1} small={false} />
					</ItemContainer>
				</ItemContainerGroup>
				<ItemContainer title="Tracks" small={false}>
					<ListArtists artists={itemContext.artists} small={false} />
				</ItemContainer>
			</BigContainerBox>
		</>
	);
};

export default Overview;
