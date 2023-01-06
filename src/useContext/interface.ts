export interface UserContent {
	userName: string;
	email: string;
	firstName?: string;
	lastName?: string;
	profileImage?: string;
}

export interface SignupData {
	email: "";
	password: "";
	userName: "";
	date_birth: "";
}
export interface LoginData {
	email: string;
	password: string;
}
export interface AllContext {
	user: UserContent;
	// setUser: React.Dispatch<React.SetStateAction<UserContent | null>>;
	loginSubmitHandler: (userData: LoginData) => Promise<void>;
	registerSubmitHandler: (
		userData: SignupData,
		openLoginModal: any
	) => Promise<void>;
}
