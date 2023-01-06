/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import React from "react";
import RecentCSS from "./recentlyPlayed.module.css";
import { AiTwotoneHeart } from "react-icons/ai";
import { Song } from "./song.dto";

const Post = (props: any) => {
	if (props.loading) {
		return <h2> Loading . . .</h2>;
	}
	//    <div className="List-group mb-5" ></div> //
	return (
		<div className={RecentCSS.slide}>
			{props.post.map((song: Song) => (
				<div key={song.id} className="list-group mb-3">
					{/* <img src={song.url} /> */}
					<div className={RecentCSS.pic}>
						<div className={RecentCSS.img_card}>
							<img src={song.url} alt="playlist radio" />
						</div>
						<div className={RecentCSS.img_text}>
							<h4>Progressive Rock</h4>
							<div className={RecentCSS.love}>
								<p>Progressive Rock</p>
								<AiTwotoneHeart />
							</div>
						</div>
					</div>
				</div>
			))}
		</div>
	);
};
export default Post;
