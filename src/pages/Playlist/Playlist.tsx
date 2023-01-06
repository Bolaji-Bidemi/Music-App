import React from "react";
import LoginNavbar from "../../Components/Navbar/LoginNavbar/LoginNavbar";
import playCover from "../../assets/playCover.png";
import Bowie from "../../assets/Bowie.png";
import { AiOutlineHeart, AiOutlinePlus, AiFillHeart } from "react-icons/ai";
import { SlOptions } from "react-icons/sl";
import PlayStyle from "./Playlist.module.css";
import { BiSearch } from "react-icons/bi";
import { FiChevronUp } from "react-icons/fi";
import RollingStones from "../../assets/RollingStones.png";
import LedZeppelin from "../../assets/LedZeppelin.png";
import Beatles from "../../assets/Beatles.png";
import DeepPurple from "../../assets/DeepPurple.png";
import Queen from "../../assets/Queen.png";
import sam from "../../assets/sam.png";

const Playlist = () => {
	return (
		<div className={PlayStyle.body}>
			<LoginNavbar openModal={undefined} openLoginModal={undefined} />
			<div className={PlayStyle.playlist}>
				<div className={PlayStyle.playlist__card}>
					<img src={playCover} alt="playlist cover" />
					<div className={PlayStyle.playlist__info}>
						<h6>Playlist</h6>
						<h3>70s Rock Anthems</h3>
						<p>Golden age of rock. Cover: Led Zeppelin</p>
						<p>88 Songs, 9 hr 13 min</p>
					</div>
				</div>
				<div className={PlayStyle.playlist__click__section}>
					<div className={PlayStyle.playlist__click}>
						<button>Pause</button>
						<span>
							<AiOutlineHeart />
						</span>
						<span>
							<SlOptions />
						</span>
					</div>
					<p>387,722 FOLOWERS</p>
				</div>
			</div>

			<div className={PlayStyle.search}>
				<form className={PlayStyle.search__form}>
					<span className={PlayStyle.search__icon}>
						<BiSearch />
					</span>
					<input
						type="text"
						placeholder="Playlist Search"
						className={PlayStyle.input}
					/>
				</form>
				<div className={PlayStyle.songs}>
					<h3>Playlist songs</h3>
					<FiChevronUp />
				</div>
			</div>

			<table>
				<tr className={PlayStyle.tableHead}>
					<th>#</th>
					<th className={PlayStyle.title}>TITLE</th>
					<th>ARTIST</th>
					<th>ALBUM</th>
					<th>TIME</th>
					<th></th>
				</tr>

				<tr className={PlayStyle.row}>
					<td>1</td>
					<td className={PlayStyle.titleRow}>
						<span>
							<img src={sam} alt="" />
						</span>
						Fleetwood Mac
					</td>
					<td>Rhiannon</td>
					<td>Fleetwood Mac</td>
					<td>5.53</td>
					<td className={PlayStyle.HeartPlus}>
						<span className={PlayStyle.heart}>
							<AiOutlineHeart />
						</span>
						<span className={PlayStyle.plus}>
							<AiOutlinePlus />
						</span>
					</td>
				</tr>

				<tr className={PlayStyle.row}>
					<td>2</td>
					<td className={PlayStyle.titleRow}>
						<span>
							<img src={sam} alt="" />
						</span>
						Fleetwood Mac
					</td>
					<td>Rhiannon</td>
					<td>Fleetwood Mac</td>
					<td>5.53</td>
					<td className={PlayStyle.HeartPlus}>
						<span className={PlayStyle.heart}>
							<AiOutlineHeart />
						</span>
						<span className={PlayStyle.plus}>
							<AiOutlinePlus />
						</span>
					</td>
				</tr>
				<tr className={PlayStyle.row}>
					<td>3</td>
					<td className={PlayStyle.titleRow}>
						<span>
							<img src={sam} alt="" />
						</span>
						Fleetwood Mac
					</td>
					<td>Rhiannon</td>
					<td>Fleetwood Mac</td>
					<td>5.53</td>
					<td className={PlayStyle.HeartPlus}>
						<span className={PlayStyle.heart}>
							<AiOutlineHeart />
						</span>
						<span className={PlayStyle.plus}>
							<AiOutlinePlus />
						</span>
					</td>
				</tr>

				<tr className={PlayStyle.row}>
					<td>4</td>
					<td className={PlayStyle.titleRow}>
						<span>
							<img src={sam} alt="" />
						</span>
						Fleetwood Mac
					</td>
					<td>Rhiannon</td>
					<td>Fleetwood Mac</td>
					<td>5.53</td>
					<td className={PlayStyle.HeartPlus}>
						<span className={PlayStyle.heart}>
							<AiOutlineHeart />
						</span>
						<span className={PlayStyle.plus}>
							<AiOutlinePlus />
						</span>
					</td>
				</tr>
				<tr className={PlayStyle.row}>
					<td>5</td>
					<td className={PlayStyle.titleRow}>
						<span>
							<img src={sam} alt="" />
						</span>
						Fleetwood Mac
					</td>
					<td>Rhiannon</td>
					<td>Fleetwood Mac</td>
					<td>5.53</td>
					<td className={PlayStyle.HeartPlus}>
						<span className={PlayStyle.heart}>
							<AiOutlineHeart />
						</span>
						<span className={PlayStyle.plus}>
							<AiOutlinePlus />
						</span>
					</td>
				</tr>
				<tr className={PlayStyle.row}>
					<td>6</td>
					<td className={PlayStyle.titleRow}>
						<span>
							<img src={sam} alt="" />
						</span>
						Fleetwood Mac
					</td>
					<td>Rhiannon</td>
					<td>Fleetwood Mac</td>
					<td>5.53</td>
					<td className={PlayStyle.HeartPlus}>
						<span className={PlayStyle.heart}>
							<AiOutlineHeart />
						</span>
						<span className={PlayStyle.plus}>
							<AiOutlinePlus />
						</span>
					</td>
				</tr>
				<tr className={PlayStyle.row}>
					<td>7</td>
					<td className={PlayStyle.titleRow}>
						<span>
							<img src={sam} alt="" />
						</span>
						Fleetwood Mac
					</td>
					<td>Rhiannon</td>
					<td>Fleetwood Mac</td>
					<td>5.53</td>
					<td className={PlayStyle.HeartPlus}>
						<span className={PlayStyle.heart}>
							<AiOutlineHeart />
						</span>
						<span className={PlayStyle.plus}>
							<AiOutlinePlus />
						</span>
					</td>
				</tr>
			</table>
			<div className={PlayStyle.featured}>
				<h3>Featured artists</h3>
				<div className={PlayStyle.featuredImg}>
					<div>
						<img src={LedZeppelin} alt="" />
						<div className={PlayStyle.featuredImgText}>
							<h4>Led Zeppelin</h4>
							<p>
								<AiFillHeart className={PlayStyle.featuredIcon} />
								343,722
							</p>
						</div>
					</div>
					<div>
						<img src={RollingStones} alt="" />
						<div className={PlayStyle.featuredImgText}>
							<h4>The Rolling Stones</h4>
							<p>
								<AiFillHeart className={PlayStyle.featuredIcon} />
								593,164
							</p>
						</div>
					</div>
					<div>
						<img src={DeepPurple} alt="" />
						<div className={PlayStyle.featuredImgText}>
							<h4>Deep Purple</h4>
							<p>
								<AiFillHeart className={PlayStyle.featuredIcon} />
								241,224
							</p>
						</div>
					</div>
					<div>
						<img src={Beatles} alt="" />
						<div className={PlayStyle.featuredImgText}>
							<h4>The Beatles</h4>
							<p>
								<AiFillHeart className={PlayStyle.featuredIcon} />
								871,189
							</p>
						</div>
					</div>
					<div>
						<img src={Queen} alt="" />
						<div className={PlayStyle.featuredImgText}>
							<h4>Queen</h4>
							<p>
								<AiFillHeart className={PlayStyle.featuredIcon} /> 490,451
							</p>
						</div>
					</div>
					<div>
						<img src={Bowie} alt="" />
						<div className={PlayStyle.featuredImgText}>
							<h4>David Bowie</h4>
							<p>
								<AiFillHeart className={PlayStyle.featuredIcon} /> 490,451
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Playlist;
