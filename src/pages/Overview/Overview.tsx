import React, { useContext, useState } from "react";
import { getSpotifyItems } from "../../api/getSpotifyItems";
import { InputSearch } from "../../components/Actionables/InputSearch";
import BigContainerBox from "../../components/Containers/BigContainerBox";
import { ItemContainer } from "../../components/Containers/ItemContainer";
import ItemContainerGroup from "../../components/Containers/ItemContainerGroup";
import debounce from "lodash.debounce";
import ListArtists from "../../components/Lists/ListArtists";
import { AuthContext } from "../../context/Login/AuthContext";
import { ItemContext } from "../../context/Items/ItemContext";
import { printConditionally } from "../../utils/printConditionally";
import ListAlbums from "../../components/Lists/ListAlbums";
import ListTracks from "../../components/Lists/ListTracks";

export const Overview = () => {
	const authContext = useContext(AuthContext);
	const itemContext = useContext(ItemContext);

	const clearResults = () => {
		console.log("borrando");
		itemContext.setAlbums([]);
		itemContext.setArtists([]);
		itemContext.setTracks([]);
	};

	const searchOnSpotifyAPI = (searchQuery: string) => {
		console.log(searchQuery);
		getSpotifyItems(searchQuery, authContext.authToken)
			.then((data) => {
				console.log("Fetched data", data);
				itemContext.setAlbums(data.albums.items);
				itemContext.setArtists(data.artists.items);
				itemContext.setTracks(data.tracks.items);
			})
			.catch((err) => {
				alert('Result not found for "' + searchQuery + '" ');
			});
	};

	const updateSearch = debounce(searchOnSpotifyAPI, 500);

	return (
		<>
			<InputSearch onSearch={updateSearch} onClear={clearResults}></InputSearch>
			<BigContainerBox>
				<ItemContainerGroup>
					<ItemContainer
						title="Artists"
						linkText="View all"
						linkRef="/artists"
						small={true}
					>
						<ListArtists
							artists={itemContext.artists}
							limit={2}
							small={true}
						/>
					</ItemContainer>
					<ItemContainer
						title="Albums"
						linkText="View all"
						linkRef="/albums"
						small={true}
					>
						<ListAlbums
							albums={itemContext.albums}
							limit={2}
							small={true}
						/>
					</ItemContainer>
				</ItemContainerGroup>
				<ItemContainer
					title="Tracks"
					linkText="View all"
					linkRef="/artists"
					small={false}
				>
					<ListTracks tracks={itemContext.tracks} small={false} />
				</ItemContainer>
			</BigContainerBox>
		</>
	);
};

export default Overview;
