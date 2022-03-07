import React from "react";
import { Artist } from "../../api/SpotifyTypes";
import { limitArray } from "../../utils/limitArray";
import { printConditionally } from "../../utils/printConditionally";
import ArtistItem from "../Items/Artist/ArtistItem";
import SmallArtistItem from "../Items/Artist/SmallArtistItem";

type ListItemProps = {
	artists: Artist[];
	limit?: number;
	small: boolean; 
};

export const ListArtists = ({ artists, limit, small }: ListItemProps) => {
	return (
		<>
			{limitArray(artists, limit).map((artist, index) =>
				printConditionally(small,
					<SmallArtistItem artist={artist} key={index} />,
					<ArtistItem artist={artist} key={index} />,
				)
			)}
		</>
	);
};
export default ListArtists;
