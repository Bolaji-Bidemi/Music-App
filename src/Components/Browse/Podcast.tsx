import React from "react";
import Browsercss from "./styles/broswer.module.css";
import moodImg from "../../assets/browse/PARTY.png";

function Podcast() {
	return (
		<>
			<div>
				<div className={Browsercss.gridContainer}>
					<div>
						<span className={Browsercss.browseMusicCategory}>{""}</span>
						<img
							className={Browsercss.browseImg}
							src={moodImg}
							alt="smoozeMood image"
						/>
					</div>
					<div>
						<span className={Browsercss.browseMusicCategory}>{""}</span>
						<img
							className={Browsercss.browseImg}
							src={moodImg}
							alt="smoozeMood image"
						/>
					</div>
					<div>
						<span className={Browsercss.browseMusicCategory}>{""}</span>
						<img
							className={Browsercss.browseImg}
							src={moodImg}
							alt="smoozeMood image"
						/>
					</div>
					<div>
						<span className={Browsercss.browseMusicCategory}>{""}</span>
						<img
							className={Browsercss.browseImg}
							src={moodImg}
							alt="smoozeMood image"
						/>
					</div>
					<div>
						<span className={Browsercss.browseMusicCategory}>{""}</span>
						<img
							className={Browsercss.browseImg}
							src={moodImg}
							alt="smoozeMood image"
						/>
					</div>
					<div>
						<span className={Browsercss.browseMusicCategory}>{""}</span>
						<img
							className={Browsercss.browseImg}
							src={moodImg}
							alt="smoozeMood image"
						/>
					</div>
				</div>
			</div>
		</>
	);
}

export default Podcast;
