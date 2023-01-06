import Popular from "../../Components/BrowseDetails/Popular";
import Playlists from "../../Components/BrowseDetails/Playlists";
import NewReleases from "../../Components/BrowseDetails/NewReleases";
import Artists from "../../Components/BrowseDetails/Artists";
import BrowseDetailcss from "../BrowseDetails/BrowseDetails.module.css";
import { useState } from "react";
import LoginNavbar from "../../Components/Navbar/LoginNavbar/LoginNavbar";
import bg from "./assets/BG.png";
const BrowseDetails = () => {
	const [active, setActive] = useState<string | React.MouseEvent<HTMLElement>>(
		"#OVERVIEW"
	);
	const [activeLoad, setActiveLoad] = useState<
		string | React.MouseEvent<HTMLElement>
	>("forward");
	const Navigate = (e: React.MouseEvent<HTMLElement> | string) => {
		setActive(e);
	};

	const handleLoadData = (e: React.MouseEvent<HTMLElement> | string) => {
		console.log(e);
		setActiveLoad(e);
	};

	return (
		<>
			<LoginNavbar openModal={null} openLoginModal={null} />
			<div className={BrowseDetailcss.browseMain}>
				<img src={bg} alt="bg" className={BrowseDetailcss.bgImage} />
				<span className={BrowseDetailcss.backdrop}>
					<div className={BrowseDetailcss.browseDetailsLinkContainer}>
						<span className={[BrowseDetailcss.browseDetailsTitle].join("")}>
							Rock
						</span>
						<ul className={BrowseDetailcss.BrowseDetailNav}>
							<li
								onClick={(e) => Navigate("#OVERVIEW")}
								className={BrowseDetailcss.BrowseDetailLink}
							>
								<a
									className={active === "#OVERVIEW" && BrowseDetailcss.active}
									href="#OVERVIEW"
								>
									OVERVIEW
								</a>
							</li>
							<li
								onClick={(e) => Navigate("#PLAYLISTS")}
								className={BrowseDetailcss.BrowseDetailLink}
							>
								<a
									className={active === "#PLAYLISTS" && BrowseDetailcss.active}
									href="#PLAYLISTS"
								>
									PLAYLISTS
								</a>
							</li>
							<li
								onClick={(e) => Navigate("#RELEASES")}
								className={BrowseDetailcss.BrowseDetailLink}
							>
								<a
									className={active === "#RELEASES" && BrowseDetailcss.active}
									href="#RELEASES"
								>
									NEW RELEASES
								</a>
							</li>
							<li
								onClick={(e) => Navigate("#ARTISTS")}
								className={BrowseDetailcss.BrowseDetailLink}
							>
								<a
									className={active === "#ARTISTS" && BrowseDetailcss.active}
									href="#ARTISTS"
								>
									ARTISTS
								</a>
							</li>
						</ul>
					</div>
				</span>

				<div className={BrowseDetailcss.container}>
					<div id={"OVERVIEW"} className={BrowseDetailcss.header}>
						<span className={BrowseDetailcss.header}>
							Popular in these week
						</span>
						<span className={BrowseDetailcss.Browseviewall}>
							<span
								id={BrowseDetailcss.Browseviewall1}
								onClick={() => handleLoadData("backward")}
								className={
									activeLoad === "backward" && BrowseDetailcss.activeLoad
								}
							>
								&#60;
							</span>
							<span
								id={BrowseDetailcss.Browseviewall1}
								onClick={() => handleLoadData("forward")}
								className={
									activeLoad === "forward" && BrowseDetailcss.activeLoad
								}
							>
								&gt;
							</span>
						</span>
					</div>
					<Popular />
				</div>

				<div className={BrowseDetailcss.container}>
					<div id={"PLAYLISTS"} className={BrowseDetailcss.header}>
						<span className={BrowseDetailcss.header}>Playlists</span>
						<span className={BrowseDetailcss.Browseviewall}>VIEW ALL</span>
					</div>
					<Playlists />
				</div>

				<div className={BrowseDetailcss.container}>
					<div id={"RELEASES"} className={BrowseDetailcss.header}>
						<span className={BrowseDetailcss.header}>New releases</span>
						<span className={BrowseDetailcss.Browseviewall}>VIEW ALL</span>
					</div>
					<NewReleases />
				</div>

				<div className={BrowseDetailcss.container}>
					<div id={"ARTISTS"} className={BrowseDetailcss.header}>
						<span className={BrowseDetailcss.header}>Artists</span>
						<span className={BrowseDetailcss.Browseviewall}>VIEW ALL</span>
					</div>
					<Artists />
				</div>
			</div>
		</>
	);
};

export default BrowseDetails;
