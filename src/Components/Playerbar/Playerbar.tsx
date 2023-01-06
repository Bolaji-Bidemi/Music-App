import React, { useState } from "react";
import playerbar from "./Playerbar.module.css";
import image59 from "../../assets/Image 59.png";
import { BiHeart } from "react-icons/bi";
import { IoCheckmarkSharp, IoRepeat } from "react-icons/io5";
import { CiShuffle } from "react-icons/ci";
import { FiSkipForward } from "react-icons/fi";
import { AiOutlineStepBackward } from "react-icons/ai";
import { GiPauseButton } from "react-icons/gi";
import { View, View2 } from "../ProgressBar/ProgressBar";
import Queue from "../../assets/Queue.png";
import Volume from "../../assets/Volume.png";
import { BsPlay } from "react-icons/bs";

const PlayerBar = () => {
	const [play, setPlay] = useState(true);
	const handlePlay = () => {
		setPlay(!play);
	};

	// const [FiSkipForward, setFiSkipForward] = useState(true);
	// const handleFiSkipForward = () => {
	// 	setFiSkipForward(!FiSkipForward);
	// };

	return (
		<div className={playerbar.playbar}>
			<div className={playerbar.playbarleft}>
				<div className={playerbar.playbarleftsonginfo}>
					<img src={image59} alt="song" height="200" />
					<div className={playerbar.artistInfo}>
						<h4>Rebel Rebel</h4>
						<p>David bowie</p>
					</div>
				</div>
				<div className={playerbar.playbarLeftButton}>
					<span>
						<BiHeart />
					</span>
					<span>
						<IoCheckmarkSharp />
					</span>
				</div>
			</div>
			<div className={playerbar.playbarleftcontrol}>
				<div className={playerbar.controlButton}>
					<CiShuffle />
					<AiOutlineStepBackward />
					{play && <BsPlay onClick={handlePlay} />}
					{!play && <GiPauseButton onClick={handlePlay} />}
					<FiSkipForward />
					<FiSkipForward />
					<IoRepeat />
				</div>
				<div className={playerbar.progress}>
					<p>0:00</p>
					<View />
					<p>3:00</p>
				</div>
			</div>

			<div className={playerbar.playbarRightButton}>
				<img src={Queue} alt="queue" height="200px" />
				<img src={Volume} alt="volume" height="200px" />

				<View2 />
			</div>
		</div>
	);
};

export default PlayerBar;
