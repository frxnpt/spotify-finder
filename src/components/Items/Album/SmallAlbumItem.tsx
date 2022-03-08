import React from "react";
import { Album } from "../../../api/SpotifyTypes";
import { getArtistOrAlbumImageURL } from "../../../utils/getItemImage";
import '../Items.scss'
type AlbumItemProps = {
	album: Album;
};

export const SmallAlbumItem = ({ album }: AlbumItemProps) => {
	const albumImage = getArtistOrAlbumImageURL(album);
	return (
		<div key={album.id}>
			<div className="listItem">
				<img className="itemImg" alt="item pic" src={albumImage}></img>
				<div className="itemInfoGroup">
					<div className="smallItemInfo">
						<div>
							<p className="itemInfoTag">Name</p>
							<p className="itemInfoContent">{album.name}</p>
						</div>
					</div>
					<div className="smallItemInfo">
						<div>
							<p className="itemInfoTag">Type</p>
							<p className="itemInfoContent">{album.type}</p>
						</div>
					</div>
				</div>
				<a
					href={"https://open.spotify.com/" + album.type + "/" + album.id}
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
export default SmallAlbumItem;
