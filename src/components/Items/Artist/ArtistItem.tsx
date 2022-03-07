import React from 'react'
import { Artist } from '../../../api/SpotifyTypes';

type ArtistItemProps = {
    artist: Artist;
}

export const ArtistItem = ({artist}: ArtistItemProps) => {
  return (
    <div key={artist.id}>
    <div className="listItem">
        <img className="itemImg" alt="item pic" src={artist.images[2].url}></img>
        <div className="itemInfo">
            <div>
                <p className="itemInfoTag">Name</p>
                <p className="itemInfoContent" >{artist.name}</p>
            </div>
        </div>
        <div className="itemInfo">
            <div>
                <p className="itemInfoTag">Type</p>
                <p className="itemInfoContent">{artist.type}</p>
            </div>
        </div>
        
        <a href={"https://open.spotify.com/" + artist.type + "/" + artist.id} target="_blank" rel='noreferrer' className="itemLink">Open Spotify</a>
    </div>
</div>
    
  )
}
export default ArtistItem;
