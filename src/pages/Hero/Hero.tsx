import React from "react";
import "./Hero.css";

const Hero = () => {
	// eslint-disable-next-line prettier/prettier
  return (
		<div className="hero">
			<div className="section1">
				<h2>
					Open the world of music. <br /> It's all here
				</h2>
				<div className="musicbox">
					<button>SMOOZE PREMIUM</button>
					<button>SMOOZE FREE</button>
				</div>
				<div className="sub">
					<p>1-month free trial </p>
					<p>$7.99/month after</p>
				</div>
			</div>
		</div>
	);
};

export default Hero;
