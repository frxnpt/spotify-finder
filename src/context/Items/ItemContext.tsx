import React, { createContext } from 'react'
import { Album, Artist, Track } from '../../api/SpotifyTypes';

export type ItemContextProps = {
	//spotifyItems: SpotifyItemsResponse
	//setSpotifyItems: Dispatch<SetStateAction<SpotifyItemsResponse>>
    albums: Album[]
    setAlbums: React.Dispatch<React.SetStateAction<Album[]>>
    tracks: Track[]
    setTracks: React.Dispatch<React.SetStateAction<Track[]>>
    artists: Artist[]; 
    setArtists: React.Dispatch<React.SetStateAction<Artist[]>>
}

export const ItemContext = createContext({} as ItemContextProps);