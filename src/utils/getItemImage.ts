import defaultPP from '../assets/images/defaultPP.png';
import { Album, Artist, Track } from "../api/SpotifyTypes";

 
export const getTrackImageURL = (track: Track): string => {
    if (track.album.images[2] !== undefined) {
        return track.album.images[2].url;
    }
    return defaultPP;
}

export const getArtistOrAlbumImageURL = (item: Artist | Album): string => {
    if (item.images[2] !== undefined) {
        return item.images[2].url;
    }
    return defaultPP;
}