import React from "react";
import Browsercss from "./styles/broswer.module.css";
import genreImg from "../../assets/browse/HIP - HOP.png";

// function Browse() {
import { Link } from "react-router-dom";

function Genres() {
	return (
		<>
			<div>
				<div className={Browsercss.gridContainer}>
					<div>
						{/* <span className={Browsercss.browseMusicCategory}>HIP - HOP</span> */}
						<span className={Browsercss.browseMusicCategory}>{""}</span>
						<Link to={`/genre-mood`}>
							<img
								className={Browsercss.browseImg}
								src={genreImg}
								alt="smoozeGenre image"
							/>
						</Link>
					</div>

					<div>
						<span className={Browsercss.browseMusicCategory}>{""}</span>

						<img
							className={Browsercss.browseImg}
							src={genreImg}
							alt="smoozeGenre image"
						/>
					</div>
					<div>
						<span className={Browsercss.browseMusicCategory}>{""}</span>
						<img
							className={Browsercss.browseImg}
							src={genreImg}
							alt="smoozeGenre image"
						/>
					</div>

					<div>
						{/* <span className={Browsercss.browseMusicCategory}>
							DANCE - ELECTRO
						</span> */}
						<span className={Browsercss.browseMusicCategory}>{""}</span>
						<img
							className={Browsercss.browseImg}
							src={genreImg}
							alt="smoozeGenre image"
						/>
					</div>
					<div>
						{/* <span className={Browsercss.browseMusicCategory}>HIP - HOP</span> */}
						<span className={Browsercss.browseMusicCategory}>{""}</span>
						<img
							className={Browsercss.browseImg}
							src={genreImg}
							alt="smoozeGenre image"
						/>
					</div>

					<div>
						{/* <span className={Browsercss.browseMusicCategory}>
							DANCE - ELECTRO
						</span> */}
						<img
							className={Browsercss.browseImg}
							src={genreImg}
							alt="smoozeGenre image"
						/>
					</div>
				</div>
			</div>
		</>
	);
}

// export default Browse;
export default Genres;
