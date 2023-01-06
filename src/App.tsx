import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Browse from "./pages/Browse/Browse";
import Home from "./pages/Home/Home";
// import BrowseDetail from "./pages/BrowseDetails/BrowseDetails";
import Playlist from "./pages/Playlist/Playlist";

import ResetPassword from "./pages/ResetPassword";
import UserDashBoard from "./pages/UserDashboard/UserDashBoard";
import Verify from "./pages/Verify/Verify";
import PlayerBar from "./Components/Playerbar/Playerbar";
import ProfileDashboard from "./pages/ProfileDashboard/ProfileDashboard";
import Newrelease from "./pages/new-release/Newrelease";

import BrowseDetails from "./pages/BrowseDetails/BrowseDetails";

// import Navbar from "./Components/Navbar/Navbar";
import Artists from "./pages/Artists/Artists";
import Allmusic from "./pages/AllMusic/AllMusic";
import RecentlyPlayed from "./Components/recentlyPlayed/recentlyPlayed";
import Podcast from "./pages/Podcast/Podcast";
import ProtectAuthRoute from "./useContext/ProtectRoutes";
import SocilaOAuth from "./Components/SocilaOAuth/SocilaOAuth";
import { DataProvider } from "./useContext";

function App() {
	return (
		<React.Fragment>
			<Router>
				<DataProvider>
					<ToastContainer />
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/resetpassword/:token" element={<ResetPassword />} />
						<Route path="/user-dashboard" element={<UserDashBoard />} />
						<Route path="/verify" element={<Verify />} />
						<Route path="/playerbar" element={<PlayerBar />} />
						<Route path="/new-release" element={<Newrelease />} />
						<Route path="/genres-moods" element={<Browse />} />
						<Route path="/browse-details" element={<BrowseDetails />} />
						<Route path="/resetpassword" element={<ResetPassword />} />
						<Route
							path="/user-dashboard"
							element={
								<ProtectAuthRoute>
									<UserDashBoard />
								</ProtectAuthRoute>
							}
						/>
						<Route path="/verify" element={<Verify />} />

						<Route path="/playlist" element={<Playlist />} />

						<Route path="/playerbar" element={<PlayerBar />} />
						<Route
							path="/profile-dashboard"
							element={
								<ProtectAuthRoute>
									<ProfileDashboard />
								</ProtectAuthRoute>
							}
						/>
						<Route path="/new-release" element={<Newrelease />} />
						<Route path="/browse" element={<Browse />} />
						<Route path="/artist" element={<Artists />} />
						<Route path="/recent" element={<RecentlyPlayed />} />
						<Route path="/podcast" element={<Podcast />} />
						<Route path="/auth/social/*" element={<SocilaOAuth />} />
						<Route path="/allmusic*" element={<Allmusic />} />

						<Route path="/genre-mood" element={<BrowseDetails />} />
					</Routes>
				</DataProvider>
			</Router>
		</React.Fragment>
	);
}

export default App;
