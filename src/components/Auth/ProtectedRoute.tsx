import React from "react";
import { Navigate } from "react-router-dom";

type ProtectedRouteProps = {
	isAuthenticated: boolean;
	redirectPath?: string;
	children: any;
};

const ProtectedRoute = ({
	isAuthenticated,
	redirectPath = "/login",
	children,
}: ProtectedRouteProps) => {
	if (!isAuthenticated) {
		return <Navigate to={redirectPath} replace />;
	}

	return children;
};

export default ProtectedRoute;
