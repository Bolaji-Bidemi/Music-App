import React from "react";
import { AiTwotoneHeart } from "react-icons/ai";
import AllUserMusic from "./AllUserMusic.module.css";
import DeepFocus from "../../assets/allmusic/DeepFocus.png";
import ProductiveMorning from "../../assets/allmusic/ProductiveMorning.png";
import WhiteNoise from "../../assets/allmusic/WhiteNoise.png";
import NatureLarge from "../../assets/allmusic/NatureLarge.png";
import BrainFood from "../../assets/allmusic/BrainFood.png";
import MorningRush from "../../assets/allmusic/MorningRush.png";

function AllMusic() {
	return (
		<div>
			<div className={AllUserMusic.musicContainer}>
				<div className={AllUserMusic.music}>
					<div className={AllUserMusic.musicImg}>
						<img src={DeepFocus} alt="deepFocus" />
					</div>
					<div className={AllUserMusic.musicInfo}>
						<h4 className={AllUserMusic.musicInfoHeader}>Deep Focus</h4>
						<span className={AllUserMusic.iconAndDesc}>
							<AiTwotoneHeart className={AllUserMusic.iconLike} />
							<p className={AllUserMusic.musicInfoDescription}>657,234</p>
						</span>
					</div>
				</div>
				<div className={AllUserMusic.music}>
					<div className={AllUserMusic.musicImg}>
						<img src={ProductiveMorning} alt="ProductiveMorning" />
					</div>
					<div className={AllUserMusic.musicInfo}>
						<h4 className={AllUserMusic.musicInfoHeader}>Productive Morning</h4>
						<span className={AllUserMusic.iconAndDesc}>
							<AiTwotoneHeart className={AllUserMusic.iconLike} />
							<p className={AllUserMusic.musicInfoDescription}>257,634</p>
						</span>
					</div>
				</div>
				<div className={AllUserMusic.music}>
					<div className={AllUserMusic.musicImg}>
						<img src={WhiteNoise} alt="WhiteNoise" />
					</div>
					<div className={AllUserMusic.musicInfo}>
						<h4 className={AllUserMusic.musicInfoHeader}>White Noise</h4>
						<span className={AllUserMusic.iconAndDesc}>
							<AiTwotoneHeart className={AllUserMusic.iconLike} />
							<p className={AllUserMusic.musicInfoDescription}>757,234</p>
						</span>
					</div>
				</div>
				<div className={AllUserMusic.music}>
					<div className={AllUserMusic.musicImg}>
						<img src={NatureLarge} alt="Nature" />
					</div>
					<div className={AllUserMusic.musicInfo}>
						<h4 className={AllUserMusic.musicInfoHeader}>Nature</h4>
						<span className={AllUserMusic.iconAndDesc}>
							<AiTwotoneHeart className={AllUserMusic.iconLike} />
							<p className={AllUserMusic.musicInfoDescription}>157,234</p>
						</span>
					</div>
				</div>
				<div className={AllUserMusic.music}>
					<div className={AllUserMusic.musicImg}>
						<img src={BrainFood} alt="BrainFood" />
					</div>
					<div className={AllUserMusic.musicInfo}>
						<h4 className={AllUserMusic.musicInfoHeader}>Brain Food</h4>
						<span className={AllUserMusic.iconAndDesc}>
							<AiTwotoneHeart className={AllUserMusic.iconLike} />
							<p className={AllUserMusic.musicInfoDescription}>357,234</p>
						</span>
					</div>
				</div>
				<div className={AllUserMusic.music}>
					<div className={AllUserMusic.musicImg}>
						<img src={MorningRush} alt="MorningRush" />
					</div>
					<div className={AllUserMusic.musicInfo}>
						<h4 className={AllUserMusic.musicInfoHeader}>Morning Rush</h4>
						<span className={AllUserMusic.iconAndDesc}>
							<AiTwotoneHeart className={AllUserMusic.iconLike} />
							<p className={AllUserMusic.musicInfoDescription}>607,554</p>
						</span>
					</div>
				</div>
			</div>
		</div>
	);
}

export default AllMusic;
