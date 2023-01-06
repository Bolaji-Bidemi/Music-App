import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function SocilaOAuth() {
	const navigate = useNavigate();
	const searchParams = new URLSearchParams(document.location.search);
	const token = searchParams.get("token");
	const getAndSetToken = () => {
		if (token !== null && token !== "error") {
			localStorage.setItem("token", token);
			navigate("/user-dashboard");
		} else {
			navigate("/user-dashboard");
		}
	};

	useEffect(() => {
		getAndSetToken();
		navigate("/user-dashboard");
	}, [token]);

	return null;
}

export default SocilaOAuth;
