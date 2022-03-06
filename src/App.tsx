import React from "react";
import { BrowserRouter, Routes, Route, Link, Navigate } from "react-router-dom";
import Login from "./pages/Login/Login";
import Overview from "./pages/Overview/Overview";
import Artists from "./pages/Artists/Artists";
import Albums from "./pages/Albums/Albums";
import Tracks from "./pages/Tracks/Tracks";
import ProtectedRoute from "./components/Auth/ProtectedRoute";

function App() {
	let auth = true;
	return (
		<BrowserRouter>
			<div className="container">
				<Routes>
					<Route
						path="/overview"
						element={
							<ProtectedRoute isAuthenticated={auth}>
								<Overview />
							</ProtectedRoute>
						}
					/>
					<Route
						path="/artists"
						element={
							<ProtectedRoute isAuthenticated={auth}>
								<Artists />
							</ProtectedRoute>
						}
					></Route>
					<Route
						path="/albums"
						element={
							<ProtectedRoute isAuthenticated={auth}>
								<Albums />
							</ProtectedRoute>
						}
					></Route>
					<Route
						path="/tracks"
						element={
							<ProtectedRoute isAuthenticated={auth}>
								<Tracks />
							</ProtectedRoute>
						}
					></Route>
					<Route
						path="/login"
						element={
							<ProtectedRoute redirectPath="/overview" isAuthenticated={!auth}>
								<Login />
							</ProtectedRoute>
						}
					></Route>
					<Route
						path="*"
						element={
							<ProtectedRoute isAuthenticated={auth}>
								<Navigate to="/overview" replace />
							</ProtectedRoute>
						}
					/>
				</Routes>
			</div>
		</BrowserRouter>
	);
}

export default App;
