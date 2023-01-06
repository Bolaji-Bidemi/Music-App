import Genres from "../../Components/Browse/Genres";
import Moods from "../../Components/Browse/Moods";
import BrowseCss from "./Browse.module.css";
import LoginNavbar from "../../Components/Navbar/LoginNavbar/LoginNavbar";

const Browse = () => {
	return (
		<>
			<LoginNavbar openModal={null} openLoginModal={null} />
			<div className={BrowseCss.browseMain}>
				<div className={BrowseCss.browseTitle}>Genres</div>
				<div className={BrowseCss.container}>
					<Genres />
					<Genres />
					<Genres />
				</div>

				<div className={BrowseCss.browseTitle}>Moods</div>
				<div className={BrowseCss.container}>
					<Moods />
					<Moods />
				</div>
			</div>
		</>
	);
};

export default Browse;
