import React from "react";
import styles from "./FlowSection.module.css";

const FlowCard = (props: {
	para: string;
	img: string;
	bottomtext: string;
	children: JSX.Element;
}) => {
	return (
		<div className={styles.gridItem}>
			<div className={styles.lgimgdiv}>
				<img src={props.img} className={styles.lgimg} />
			</div>
			<div className={styles.bggradient}></div>

			<div className={styles.imgcontainer}>
				<img src={props.img} className={styles.smallimg} alt="album-img" />
				<div className={styles.hangingicon}>{props.children}</div>
			</div>
			<div className={styles.flowcardright}>
				<h3>FLOW</h3>
				<p>{props.para}</p>
			</div>
			<p className={styles.btmalign}>{props.bottomtext}</p>
		</div>
	);
};

export default FlowCard;
