import React from "react";
import { useLocation, Navigate } from "react-router-dom";
import { toast } from "react-toastify";

const ProtectAuthRoute = ({ children }: { children: JSX.Element }) => {
	const location = useLocation();
	let isAuthenticated: string | any = localStorage.getItem("token") as any;
	isAuthenticated = isAuthenticated?.trim();

	if (isAuthenticated === null || isAuthenticated === undefined) {
		toast.error("Please log in.");
		sessionStorage.clear();
		localStorage.clear();
		window.localStorage.clear();
		return <Navigate to="/" state={{ from: location }} />;
	} else {
		return children;
	}
};

export default ProtectAuthRoute;
