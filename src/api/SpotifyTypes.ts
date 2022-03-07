export type SpotifyItemsResponse = {
    tracks: { items:  Track[] };
    albums: { items: Album[] };
    artists: { items: Artist[] };
}

export type SignInWithSpotifyResponse = {
    access_token: string
}

export type SpotifyItemType = 'track' | 'album' | 'artist';

export type Track = {
	id: string;
	name: string;
	type: SpotifyItemType;
	album: Album;
	artists: Artist[];
};

export type Album = {
	id: string;
	name: string;
	type: SpotifyItemType;
	images: SpotifyImage[];
};

export type Artist = {
	id: string;
	name: string;
	type: SpotifyItemType;
	images: SpotifyImage[];
};

export type SpotifyImage = {
    url: string;
}