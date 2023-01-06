import React, { useEffect, useState } from "react";
import FlowCard from "./FlowCard";
import styles from "./FlowSection.module.css";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import AddIcon from "@mui/icons-material/Add";
import { apiGet } from "../../utils/api";
import { toast } from "react-toastify"; 

// mockdata
const mockData = [
	{
		bottomtext: "Based on your listening history",
		para: "Your personal Soundtrack",
		img: "./src/assets/flowsection/albumimg.webp",
		children: <PlayArrowIcon />,
	},
	{
		bottomtext:
			"Select multiple genres and moods to create the perfect soundtrack",
		para: "Create your own perfect soundtrack",
		img: "./src/assets/flowsection/Flowcover2.png",
		children: <AddIcon />,
	},
	{
		bottomtext: "Select multiple artists to create the perfect sountrack",
		para: "Create your own concert with your favorite singers",
		img: "./src/assets/flowsection/Flowcover3.png",
		children: <AddIcon />,
	},
];

interface FlowData {
	bottomtext: string;
	para: string;
	img: string;
	children: JSX.Element;
}

const FlowSection = () => {
	const [data, setData] = useState<FlowData[] | null>(null);
	useEffect(() => {
		try {
			apiGet("/api/playlist/flow")
				.then((res) => {
					setData(res.data);
					console.log(data);
				})
				.catch(console.error);
		} catch (err: any) {
			toast.error(err);
		}
	}, [data]);
	return (
		<>
			<h1 className={styles.title}>Flow</h1>
			<div className={styles.main}>
				{data === null &&
					mockData?.map((item, index) => (
						<FlowCard
							key={index}
							bottomtext={item.bottomtext}
							para={item.para}
							img={item.img}
						>
							{item.children}
						</FlowCard>
					))}
				{data?.map((item, index) => (
					<FlowCard
						key={index}
						bottomtext={item.bottomtext}
						para={item.para}
						img={item.img}
					>
						{item.children}
					</FlowCard>
				))}
			</div>
		</>
	);
};

export default FlowSection;
