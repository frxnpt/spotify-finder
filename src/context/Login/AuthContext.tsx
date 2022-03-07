import React, { createContext, Dispatch, SetStateAction } from 'react'
import { SignInWithSpotifyResponse } from '../../api/SpotifyTypes';

export type AuthContextProps = {
	authToken: string
	setAuthToken: Dispatch<SetStateAction<string>>
	isAuthenticated: boolean
	setIsAuthenticated: Dispatch<SetStateAction<boolean>>
};

export const AuthContext = createContext({} as AuthContextProps);