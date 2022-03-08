import React from "react";
import { Track } from "../../api/SpotifyTypes";
import { limitArray } from "../../utils/limitArray";
import { printConditionally } from "../../utils/printConditionally";
import TrackItem from "../Items/Track/TrackItem";

type ListItemProps = {
	tracks: Track[];
	limit?: number;
	small: boolean;
};

export const ListTracks = ({ tracks, limit, small }: ListItemProps) => {
	return (
		<>
			{limitArray(tracks, limit).map((track, index) => (
				<TrackItem track={track} key={index} />
			))}
		</>
	);
};
export default ListTracks;
