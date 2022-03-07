import React, { createContext } from 'react'
import { SpotifyItemsResponse } from '../../api/SpotifyTypes';



export const ItemContext = createContext({} as SpotifyItemsResponse);