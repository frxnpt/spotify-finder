import React from "react";
import { Artist } from "../../../api/SpotifyTypes";
import { getArtistOrAlbumImageURL } from "../../../utils/getItemImage";
import '../Items.scss'
type ArtistItemProps = {
	artist: Artist;
};

export const SmallArtistItem = ({ artist }: ArtistItemProps) => {
	const artistImage = getArtistOrAlbumImageURL(artist);
	return (
		<div key={artist.id}>
			<div className="listItem">
				<img className="itemImg" alt="item pic" src={artistImage}></img>
				<div className="itemInfoGroup">
					<div className="smallItemInfo">
						<div>
							<p className="itemInfoTag">Name</p>
							<p className="itemInfoContent">{artist.name}</p>
						</div>
					</div>
					<div className="smallItemInfo">
						<div>
							<p className="itemInfoTag">Type</p>
							<p className="itemInfoContent">{artist.type}</p>
						</div>
					</div>
				</div>
				<a
					href={"https://open.spotify.com/" + artist.type + "/" + artist.id}
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
export default SmallArtistItem;
