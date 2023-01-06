/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState } from "react";
import axios from "axios";
import Post from "./posts";
// import "../../assets/rimages";
import { CgChevronLeft, CgChevronRight } from "react-icons/cg";
import RecentCSS from "./recentlyPlayed.module.css";

function recentlyPlayed() {
	const [post, setPost] = useState([]);
	const [Loading, setLoading] = useState(false);
	// eslint-disable-next-line react-hooks/rules-of-hooks
	const [currentPage, setcurrentPage] = useState(1);
	const postPerPage = 6;
	// do not put async in useEffect whatsoever

	useEffect(() => {
		const fetchPost = async () => {
			setLoading(true);
			const res = await axios.get(
				"https://jsonplaceholder.typicode.com/photos"
			);

			setPost(res.data);
			setLoading(false);
		};
		fetchPost();
	}, []);

	// console.log(picture);
	console.log(post);
	const indexofLastPost = currentPage * postPerPage;
	const indexOfFirstPost = indexofLastPost - postPerPage;
	const currentPosts = post.slice(indexOfFirstPost, indexofLastPost);
	const pageNumbers = Math.ceil(post.length / postPerPage);
	return (
		<div className={RecentCSS.container}>
			<div className={RecentCSS.arrow}>
				<h3>Recently Played</h3>
				<div className={RecentCSS.arrows}>
					<button
						className={RecentCSS.buton}
						onClick={() => setcurrentPage(currentPage - 1)}
						disabled={currentPage === 1}
					>
						<CgChevronLeft />
					</button>
					<button
						className={RecentCSS.buton}
						onClick={() => setcurrentPage(currentPage + 1)}
						disabled={currentPage === pageNumbers}
					>
						<CgChevronRight />
					</button>
				</div>
			</div>
			<Post post={currentPosts} loading={Loading} />
		</div>
	);
}

export default recentlyPlayed;
