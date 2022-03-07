import React, { useContext } from "react";
import { getSpotifyItems } from "../../api/getSpotifyItems";
import { InputSearch } from "../../components/Actionables/InputSearch";
import BigContainerBox from "../../components/Containers/BigContainerBox";
import { ItemContainer } from "../../components/Containers/ItemContainer";
import ItemContainerGroup from "../../components/Containers/ItemContainerGroup";
import debounce from "lodash.debounce";
import ListArtists from "../../components/Lists/ListArtists";
import { AuthContext } from "../../context/Login/AuthContext";

export const Overview = () => {
	const authContext = useContext(AuthContext);
	
	const updateSearch = (searchQuery: string) => {
		getSpotifyItems(searchQuery, authContext.authToken)
		.then((data) => {
			console.log("Fetched data", data)
		})
		.catch(err => {
			alert('Result not found for "' + searchQuery + '" ');
		});
		
	};

	const clearResults = () => {};

	
	console.log(JSON.stringify(authContext));

	return (
		<>
			<InputSearch onSearch={updateSearch} onClear={clearResults}></InputSearch>
			<BigContainerBox>
				<ItemContainerGroup>
					<ItemContainer title="Artists" small={true}>
						<ListArtists artists={[]} small={true} />
					</ItemContainer>
					<ItemContainer title="Albums" small={true}>
						<ListArtists artists={[]} small={true} />
					</ItemContainer>
				</ItemContainerGroup>
				<ItemContainer title="Tracks" small={false}>
					<ListArtists artists={[]} small={false} />
				</ItemContainer>
			</BigContainerBox>
		</>
	);
};

export default Overview;
