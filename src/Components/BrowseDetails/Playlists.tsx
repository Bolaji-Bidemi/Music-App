import React from "react";
import { AiTwotoneHeart } from "react-icons/ai";
import BrowseDetails from "./styles/BrowseDetails.module.css";
import DeepFocus from "./asset/GLAM ROCK.png";
import NatureLarge from "./asset/WORKOUT rock.png";
import IconPlaying from "./IconPlaying";

function Popular() {
	return (
		<div>
			<div className={BrowseDetails.musicContainer}>
				<div className={BrowseDetails.music}>
					<div className={BrowseDetails.musicImg}>
						<img src={DeepFocus} alt="deepFocus" />
					</div>
					<div className={BrowseDetails.musicInfo}>
						<h4 className={BrowseDetails.musicInfoHeader}>Deep Focus</h4>
						<span className={BrowseDetails.iconAndDesc}>
							<AiTwotoneHeart className={BrowseDetails.iconLike} />
							<p className={BrowseDetails.musicInfoDescription}>657,234</p>
						</span>
					</div>
				</div>
				<div className={BrowseDetails.music}>
					<div className={BrowseDetails.musicImg}>
						<img src={DeepFocus} alt="ProductiveMorning" />
					</div>
					<div className={BrowseDetails.musicInfo}>
						<h4 className={BrowseDetails.musicInfoHeader}>
							Productive Morning
						</h4>
						<span className={BrowseDetails.iconAndDesc}>
							<AiTwotoneHeart className={BrowseDetails.iconLike} />
							<p className={BrowseDetails.musicInfoDescription}>257,634</p>
						</span>
					</div>
				</div>
				<div className={BrowseDetails.music}>
					<div className={BrowseDetails.musicImg}>
						<img src={NatureLarge} alt="WhiteNoise" />
					</div>
					<div className={BrowseDetails.musicInfo}>
						<h4 className={BrowseDetails.musicInfoHeader}>White Noise</h4>
						<span className={BrowseDetails.iconAndDesc}>
							<AiTwotoneHeart className={BrowseDetails.iconLike} />
							<p className={BrowseDetails.musicInfoDescription}>757,234</p>
						</span>
					</div>
				</div>
				<div className={BrowseDetails.music}>
					<div className={BrowseDetails.musicImg}>
						<span className={BrowseDetails.playing}>
							<IconPlaying />
							<img src={NatureLarge} alt="Nature" />
						</span>
					</div>
					<div className={BrowseDetails.musicInfo}>
						<h4 className={BrowseDetails.musicInfoHeader}>Nature</h4>
						<span className={BrowseDetails.iconAndDesc}>
							<AiTwotoneHeart className={BrowseDetails.iconLike} />
							<p className={BrowseDetails.musicInfoDescription}>157,234</p>
						</span>
					</div>
				</div>
				<div className={BrowseDetails.music}>
					<div className={BrowseDetails.musicImg}>
						<img src={DeepFocus} alt="BrainFood" />
					</div>
					<div className={BrowseDetails.musicInfo}>
						<h4 className={BrowseDetails.musicInfoHeader}>Brain Food</h4>
						<span className={BrowseDetails.iconAndDesc}>
							<AiTwotoneHeart className={BrowseDetails.iconLike} />
							<p className={BrowseDetails.musicInfoDescription}>357,234</p>
						</span>
					</div>
				</div>
				<div className={BrowseDetails.music}>
					<div className={BrowseDetails.musicImg}>
						<img src={NatureLarge} alt="MorningRush" />
					</div>
					<div className={BrowseDetails.musicInfo}>
						<h4 className={BrowseDetails.musicInfoHeader}>Morning Rush</h4>
						<span className={BrowseDetails.iconAndDesc}>
							<AiTwotoneHeart className={BrowseDetails.iconLike} />
							<p className={BrowseDetails.musicInfoDescription}>607,554</p>
						</span>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Popular;
