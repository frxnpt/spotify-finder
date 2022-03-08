import React from "react";
import { Track } from "../../../api/SpotifyTypes";
import { getTrackImageURL } from "../../../utils/getItemImage";

type TrackItemProps = {
	track: Track;
};

export const TrackItem = ({ track }: TrackItemProps) => {
	const trackImage = getTrackImageURL(track);
	return (
		<div key={track.id}>
			<div className="listItem">
				<img className="itemImg" alt="item pic" src={trackImage}></img>
				<div className="itemInfo">
					<div>
						<p className="itemInfoTag">Name</p>
						<p className="itemInfoContent">{track.name}</p>
					</div>
				</div>
				<div className="itemInfo">
					<div>
						<p className="itemInfoTag">Type</p>
						<p className="itemInfoContent">{track.type}</p>
					</div>
				</div>

				<a
					href={"https://open.spotify.com/" + track.type + "/" + track.id}
					target="_blank"
					rel="noreferrer"
					className="itemLink"
				>
					Open Spotify
				</a>
			</div>
		</div>
	);
};
export default TrackItem;
