import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login/Login";
import Overview from "./pages/Overview/Overview";
import Artists from "./pages/Artists/Artists";
import Albums from "./pages/Albums/Albums";
import Tracks from "./pages/Tracks/Tracks";
import ProtectedRoute from "./components/Auth/ProtectedRoute";
import "./styles/_global.scss";
import Header from "./components/Containers/Header";
import { AuthContext } from "./context/Login/AuthContext";
//TODO: move routes to react.js file and import them here using a map
function App() {
	const [authToken, setAuthToken] = useState("");
	const [isAuthenticated, setIsAuthenticated] = useState(false)

	return (
		<AuthContext.Provider value={{authToken, setAuthToken, isAuthenticated, setIsAuthenticated}}>
			<BrowserRouter>
				<div className="container">
					<Header />
					<Routes>
						<Route
							path="/overview"
							element={
								<ProtectedRoute isAuthenticated={isAuthenticated}>
									<Overview />
								</ProtectedRoute>
							}
						/>
						<Route
							path="/artists"
							element={
								<ProtectedRoute isAuthenticated={isAuthenticated}>
									<Artists />
								</ProtectedRoute>
							}
						></Route>
						<Route
							path="/albums"
							element={
								<ProtectedRoute isAuthenticated={isAuthenticated}>
									<Albums />
								</ProtectedRoute>
							}
						></Route>
						<Route
							path="/tracks"
							element={
								<ProtectedRoute isAuthenticated={isAuthenticated}>
									<Tracks />
								</ProtectedRoute>
							}
						></Route>
						<Route
							path="/login"
							element={
								<ProtectedRoute
									redirectPath="/overview"
									isAuthenticated={!isAuthenticated}
								>
									<Login />
								</ProtectedRoute>
							}
						></Route>
						<Route
							path="*"
							element={
								<ProtectedRoute isAuthenticated={isAuthenticated}>
									<Navigate to="/overview" replace />
								</ProtectedRoute>
							}
						/>
					</Routes>
				</div>
			</BrowserRouter>
		</AuthContext.Provider>
	);
}

export default App;
