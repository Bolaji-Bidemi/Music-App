import React, { FC, useContext } from "react";
import NavBarLogo from "../../../assets/NavBar-Logo.svg";
import Profile from "../../../assets/Profile-Logo.svg";
import Search from "../../../assets/Search.svg";
import styles from "./LoginNavbar.module.css";
import { TopText } from "../../Texts/TopText/TopText";
import { Link, useNavigate } from "react-router-dom";
import { DataContext } from "../../../useContext";
import { AllContext } from "../../../useContext/interface";
interface LayoutProps {
	openModal: any;
	openLoginModal: any;
}

const LoginNavbar: FC<LayoutProps> = ({ openModal, openLoginModal }) => {
	const navigate = useNavigate();
	const { user } = useContext(DataContext) as AllContext;

	const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
		if (e.target.value === "/logout") {
			sessionStorage.clear();
			localStorage.clear();
			window.localStorage.clear();
			navigate("/");
		} else {
			navigate(e.target.value);
		}
	};
	return (
		<nav className={styles.allSection}>
			<div className={styles.loginNavbarContainer}>
				<div className={styles.navSection}>
					<div className={styles.navLogo}>
						<Link to="/">
							<img className={styles.logoImg} src={NavBarLogo} alt="Navlogo" />
						</Link>
					</div>
					<div className={styles.loginTopTextLeft}>
						<TopText text="Home" link="/user-dashboard" />
						<TopText text="Library" link="/library" />
						<TopText text="Browse" link="/browse" />
					</div>
				</div>
				<form className={styles.searchbox}>
					<img className={styles.img} src={Search} alt="Search icon" />
					<input type="text" placeholder="Search" />
				</form>
				<div className={styles.profile}>
					<div>
						<span id={styles.profileImagContainer}>
							{
								<img
									src={
										user.profileImage !== null &&
										user.profileImage !== undefined &&
										user.profileImage !== ""
											? user.profileImage
											: Profile
									}
									alt="profile"
									className={styles.profileimg}
								/>
							}
						</span>
					</div>

					<p style={{ marginLeft: "10px", color: "white" }}>{user?.userName}</p>
					<div className={styles.profileDropdown}>
						<select className={styles.select} onChange={handleSelect}>
							<option value="" selected hidden></option>
							<option value="/profile-dashboard">
								<Link to="/profile-dashboard">Profile</Link>
							</option>
							<option value="/logout">Logout</option>
							<option value="/about">About</option>
						</select>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default LoginNavbar;
