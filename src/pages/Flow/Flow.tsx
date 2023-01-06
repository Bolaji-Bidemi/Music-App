import React from "react";
import Phone from "../../assets/PhoneFinder.png";
import "./Flow.css";
import flowicon from "../../assets/flowicon.svg";

const Flow = () => {
	// eslint-disable-next-line prettier/prettier
  return (
		<div className="flow">
			<img src={Phone} alt="phone" />
			<div className="flow-text">
				<div className="icontext">
					<img className="flowicon" src={flowicon} alt="flow-icon" />
					<span>Flow</span>
				</div>

				<p>
					Listen to a personalized mix of tracks based on your <br /> listening
					history, or create your own mix of genres, artists <br /> and
					playlists - letting you enjoy more of the music you love.
				</p>
			</div>
		</div>
	);
};

export default Flow;
