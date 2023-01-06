import React from "react";
import AllUserArtists from "../../Components/BrowseDetails/Artists";
import LoginNavbar from "../../Components/Navbar/LoginNavbar/LoginNavbar";
import PlayerBar from "../../Components/Playerbar/Playerbar";

function Artists() {
	return (
		<>
			<LoginNavbar openModal={undefined} openLoginModal={undefined} />
			<div>
				<AllUserArtists />
				<AllUserArtists />
				<AllUserArtists />
			</div>
			<PlayerBar />
		</>
	);
}

export default Artists;
