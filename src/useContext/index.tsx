// import axios from "axios";
import { createContext, ReactElement, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { apiPostNoAuth } from "../utils/api/axios";
import { AllContext, UserContent, LoginData, SignupData } from "./interface";

export const DataContext = createContext<AllContext | null>(null);

export const DataProvider = ({
	children,
}: {
	[key: string]: ReactElement[];
}) => {
	const navigate = useNavigate();
	const storedUser = localStorage.getItem("user");
	const [user, setUser] = useState<UserContent>({
		userName: "",
		email: "",
		firstName: "",
		lastName: "",
		profileImage: "",
	});
	useEffect(() => {
		if (storedUser !== null) {
			setUser(JSON.parse(storedUser));
		}
	}, [storedUser]);

	const loginSubmitHandler = async (userData: LoginData) => {
		try {
			await apiPostNoAuth("/api/user/signin", userData)
				.then((res) => {
					const { user, message, signature } = res.data;
					setUser(user);
					toast.success(message);
					localStorage.setItem("token", signature);
					localStorage.setItem("user", JSON.stringify(user));

					return navigate("/user-dashboard");
				})
				.catch((err) => {
					console.log(err);
					if (err.message === "Network Error") {
						toast("Network error", { toastId: "login ntwrk err" });
						return;
					}
					toast.error(err.response.data.error.split(".")[0], {
						toastId: "login err",
					});
				});
		} catch (err) {
			console.log(err);
		}
	};

	const registerSubmitHandler = async (
		userData: SignupData,
		openLoginModal: any
	) => {
		try {
			await apiPostNoAuth("/api/user/signup", userData)
				.then((res) => {
					const { message } = res.data;
					toast.success(message);
					return openLoginModal();
				})
				.catch((err) => {
					console.log(err);
					if (err.message === "Network Error") {
						toast("Network error", { toastId: "login ntwrk err" });
						return;
					}
					toast.error(err.response.data.error.split(".")[0], {
						toastId: "login err",
					});
				});
		} catch (err) {
			console.log(err);
		}
	};
	return (
		<DataContext.Provider
			value={{ user, loginSubmitHandler, registerSubmitHandler }}
		>
			{children}
		</DataContext.Provider>
	);
};
