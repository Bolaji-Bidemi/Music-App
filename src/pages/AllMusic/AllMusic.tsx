import React from "react";
import AllUserMusic from "../../Components/AllMusicUser/AllUserMusic";
import LoginNavbar from "../../Components/Navbar/LoginNavbar/LoginNavbar";

function AllMusic() {
	return (
		<>
			<LoginNavbar openModal={undefined} openLoginModal={undefined} />
			<div>
				<AllUserMusic />
				<AllUserMusic />
				<AllUserMusic />
			</div>
		</>
	);
}

export default AllMusic;
