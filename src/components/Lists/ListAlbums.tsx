import React from "react";
import { Album } from "../../api/SpotifyTypes";
import { limitArray } from "../../utils/limitArray";
import { printConditionally } from "../../utils/printConditionally";
import AlbumItem from "../Items/Album/AlbumItem";
import SmallAlbumItem from "../Items/Album/SmallAlbumItem";

type ListItemProps = {
	albums: Album[];
	limit?: number;
	small: boolean; 
};

export const ListAlbums = ({ albums, limit, small }: ListItemProps) => {
	return (
		<>
			{limitArray(albums, limit).map((album, index) =>
				printConditionally(small,
					<SmallAlbumItem album={album} key={index} />,
					<AlbumItem album={album} key={index} />,
				)
			)}
		</>
	);
};
export default ListAlbums;
